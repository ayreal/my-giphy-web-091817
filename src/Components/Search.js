import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      limit: ""
    };
  }

  handleSearchInput = e => {
    this.setState({ searchText: e.target.value });
  };
  handleLimitInput = e => this.setState({ limit: e.target.value });

  render() {
    return (
      <div>
        <button>Search</button>
        <button>Trending</button>
        <br />
        <input
          type="text"
          placeholder="Search Here"
          value={this.state.searchText}
          onChange={this.handleSearchInput}
        />
        <input
          type="text"
          placeholder="Limit"
          value={this.state.limit}
          onChange={this.handleLimitInput}
        />
      </div>
    );
  }
}

Search.propTypes = {
  limit: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};

export default Search;
