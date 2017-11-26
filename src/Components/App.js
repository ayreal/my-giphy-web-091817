import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import ImagesContainer from "./ImagesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      limit: "",
      searchTerm: "",
      images: []
    };
    this.modelImages = this.modelImages.bind(this);
  }

  handleSearchInput = e => this.setState({ searchTerm: e.target.value });
  handleLimitInput = e => this.setState({ limit: e.target.value });

  // fetch(`${URL}search?api_key=${KEY}&q=${search}&limit=${limit}`)
  fetchImages = searchTerm => {
    const KEY = `tN2fD3YQhNyUOzryYy1oRTUs03F5QPrJ`;
    const URL = `https://api.giphy.com/v1/gifs/`;
    fetch(`${URL}search?api_key=${KEY}&q=${searchTerm}`)
      .then(res => res.json())
      .then(json => this.modelImages(json["data"]));
  };

  modelImages(data) {
    const imageAry = [];
    data.forEach(image => {
      return imageAry.push({
        url: image.images.preview_gif.url,
        isFavorite: false
      });
    });
    this.setState({ images: imageAry });
  }

  componentDidMount() {
    this.fetchImages("cats");
  }

  render() {
    return (
      <div className="App">
        My Giphy
        <Search
          searchTerm={this.state.searchTerm}
          limit={this.state.limit}
          handleSearchInput={this.handleSearchInput}
          handleLimitInput={this.handleLimitInput}
        />
        <ImagesContainer
          searchTerm={this.searchTerm}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
