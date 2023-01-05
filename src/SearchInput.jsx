import React from "react";

function SearchInput() {
  const [searchInputValue, setSearchInputValue] = React.useState("");
  const handleSearchInput = (e) => {
    setSearchInputValue(e.target.value);
  };
  return (
    <>
      <input onChange={handleSearchInput} type="text" />
      <h1>{searchInputValue}</h1>
    </>
  );
}

export default SearchInput;
