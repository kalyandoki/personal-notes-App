import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch({ search, category });
  };

  return (
    <div className="flex flex-wrap gap-2 items-center mt-4 shadow-black bg-green-100 p-4 rounded-3xl">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border bg-gray-200 rounded-md flex-1"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border bg-gray-200 rounded-md"
      >
        <option value="">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-400 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
