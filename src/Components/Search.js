import React from "react";
import PropTypes from "prop-types";

const Search = props => (
  <div>
    <button>Search</button>
    <button>Trending</button>
    <br />
    <input
      placeholder="Search Here"
      value={props.searchTerm}
      onChange={props.handleSearchInput}
    />
    <input
      placeholder="Limit"
      value={props.limit}
      onChange={props.handleLimitInput}
    />
  </div>
);

Search.propTypes = {
  searchTerm: PropTypes.string,
  limit: PropTypes.string,
  handleSearchInput: PropTypes.func.isRequired,
  handleLimitInput: PropTypes.func.isRequired
};

export default Search;
