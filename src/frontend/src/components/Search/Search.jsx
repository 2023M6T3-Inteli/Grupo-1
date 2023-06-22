import React from "react";
import "./Search.css";
import magnifier from "../../assets/magnifier.svg";

function Search({ searchTerm, handleSearch }) {
  return (
    <div className="search">
      <input
        placeholder="Search by Tags"
        src={magnifier}
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="div-lupa">
        <img src={magnifier} />
      </div>
    </div>
  );
}

export default Search;
