import React from "react";
import PropTypes from "prop-types";

const Search = () => (
  <div>
    <button>Search</button>
    <button>Trending</button>
    <br />
    <input placeholder="Search Here" />
    <input placeholder="Limit" />
  </div>
);

Search.propTypes = {
  searchTerm: PropTypes.string,
  limit: PropTypes.string
};

export default Search;
