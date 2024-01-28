import React, { useState, useEffect } from "react";
import { SearchBarProps } from "../interfaces/Product.interface";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  return (
    <input
      value={searchQuery}
      onChange={handleSearchInputChange}
      placeholder="Search by name"
    />
  );
};

export default SearchBar;
