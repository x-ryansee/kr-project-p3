import React from "react";

function Search({setSearch , search}) {

  function handleSearch(value) {
    setSearch(value)
    console.log(value)
  }

  return (
    <div className="searchbar">
      <label className="search">Search Menu:</label>
      <input
        type="text"
        value={search}
        id="search"
        placeholder="Type an item to search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;