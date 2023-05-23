"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./searchbar.css";

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <div className="search-results">
      <ul>
        {results.map((result) => (
          <Link href={`/discs/${result.name_slug}`} key={result.name}>
            <li className="result">
              <div>
                <span className="discName">{result.name}</span>
                <br />
                <span className="discBrand">{result.brand}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allDiscs, setAllDiscs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/simple`);

        if (!response.ok) {
          throw new Error("Error fetching search results");
        }

        const data = await response.json();
        setAllDiscs(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setAllDiscs([]);
      }
    };

    fetchData();
  }, []);

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && searchResults.length > 0) {
      router.push(`/discs/${searchResults[0].name_slug}`);
    }
  };

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setSearchQuery(searchValue);

    if (searchValue.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredDiscs = allDiscs.filter((disc) => disc.name.toLowerCase().includes(searchValue.toLowerCase()));

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
          required
          autoFocus
          placeholder="Find a disc..."
        />
      </div>

      <SearchResults results={searchResults} />
    </div>
  );
};

export default Searchbar;
