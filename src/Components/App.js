import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import ImagesContainer from "./ImagesContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      limit: "",
      // searchTerm: "goat",
      images: []
    };
    this.modelImages = this.modelImages.bind(this);
  }
  componentDidMount() {}

  performSearch = query => {
    const limit = this.state.limit;
    const KEY = `tN2fD3YQhNyUOzryYy1oRTUs03F5QPrJ`;
    const URL = `https://api.giphy.com/v1/gifs/`;
    fetch(`${URL}search?api_key=${KEY}&q=${query}&limit=${limit}`)
      .then(res => res.json())
      .then(json => this.modelImages(json.data));
  };

  modelImages(data) {
    const imageAry = [];
    data.forEach(image => {
      return imageAry.push({
        url: image.images.fixed_height.url,
        isFavorite: false
      });
    });
    this.setState({ images: imageAry });
  }

  render() {
    return (
      <div className="App">
        My Giphy
        <Search
          searchTerm={this.state.searchTerm}
          limit={this.state.limit}
          onSearch={this.performSearch}
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
