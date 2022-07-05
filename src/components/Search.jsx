import React from "react";
import Header from "./Headers";

const Search = ({
  setSearchKeyword,
  handleKeyDown,
  text,
  filterKeywords,
  deleteKeyword,
  clearAll,
}) => {
  return (
    <div className="search-container">
      <ul>
        {filterKeywords.length > 0 && (
          <Header
            keywords={filterKeywords}
            removeKeywords={deleteKeyword}
            clearAll={clearAll}
          />
        )}
        <input
          type="text"
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          value={text}
          placeholder="Search..."
          id="search"
          
        />
      </ul>
    </div>
  );
};

export default Search;
