import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import ImagesContainer from "./ImagesContainer";

class App extends Component {
  state = {
    limit: "",
    searchTerm: "",
    images: []
  };

  // fetch(`${URL}search?api_key=${KEY}&q=${search}&limit=${limit}`)
  fetchImages = searchTerm => {
    const KEY = `tN2fD3YQhNyUOzryYy1oRTUs03F5QPrJ`;
    const URL = `https://api.giphy.com/v1/gifs/`;
    fetch(`${URL}search?api_key=${KEY}&q=${searchTerm}`)
      .then(res => res.json())
      .then(json => this.setState({ images: json["data"] }));
  };

  componentDidMount() {
    this.fetchImages("cats");
  }

  render() {
    return (
      <div className="App">
        My Giphy
        <Search searchTerm={this.searchTerm} limit={this.state.limit} />
        <ImagesContainer
          searchTerm={this.searchTerm}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
