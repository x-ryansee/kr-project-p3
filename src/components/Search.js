import React from "react";

function Search({setSearch , search}) {

  function handleSearch(value) {
    setSearch(value)
    console.log(value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Songs:</label>
      <input
        type="text"
        value={search}
        id="search"
        placeholder="Type a song to search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;