import React from "react";
import Link from "next/link";
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

export default SearchResults;
