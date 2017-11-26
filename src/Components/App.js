import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import ImagesContainer from "./ImagesContainer";

class App extends Component {
  state = {
    images: []
  };
  // const limit = "5"
  // fetch(`${URL}search?api_key=${KEY}&q=${search}&limit=${limit}`)
  fetchImages = searchTerm => {
    const KEY = `tN2fD3YQhNyUOzryYy1oRTUs03F5QPrJ`;
    const URL = `https://api.giphy.com/v1/gifs/`;
    fetch(`${URL}search?api_key=${KEY}&q=${searchTerm}`)
      .then(res => res.json())
      .then(json => (this.state.images = json["data"]));
  };

  componentDidMount() {
    this.fetchImages("cats");
  }

  render() {
    return (
      <div className="App">
        My Giphy
        <Search searchTerm={this.searchTerm} />
        <ImagesContainer searchTerm={this.searchTerm} />
      </div>
    );
  }
}

export default App;
