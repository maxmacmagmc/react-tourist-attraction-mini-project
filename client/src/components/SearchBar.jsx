import { useState } from "react";

function SearchBar({ onSearch, searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ค้นหาสถานที่ท่องเที่ยว..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        ค้นหา
      </button>
    </form>
  );
}

export default SearchBar;
