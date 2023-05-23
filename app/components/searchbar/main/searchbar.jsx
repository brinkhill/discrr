"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchResults from "./SearchResults";
import "./searchbar.css";

async function getDiscs() {
  const res = await fetch(`/api/simple`);
  // error handler
  if (!res.ok) {
    throw new Error("Failed to fetch disc data");
  }
  return res.json();
}

export default async function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const discData = await getDiscs();

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && searchResults.length > 0) {
      router.push(`/discs/${searchResults[0].name_slug}`);
    }
  };

  const handleInputChange = (event) => {
    let searchValue = event.target.value;
    setSearchQuery(searchValue);
    if (searchValue.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filteredDiscs = discData.filter((disc) => disc.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchResults(filteredDiscs);
  };

  return (
    <div className="search-section">
      <h2 className="hookgrab">Bagging a disc just got easier.</h2>
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="search-icon"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
        </svg>

        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          autoFocus
          placeholder="Find a disc..."
        />
      </div>
      <SearchResults results={searchResults} />
    </div>
  );
}
