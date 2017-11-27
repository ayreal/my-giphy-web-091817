import React from "react";
import PropTypes from "prop-types";
import ResultImages from "./ResultImages";
import FavoriteImages from "./FavoriteImages";

const ImagesContainer = props => (
  <div>
    <ResultImages images={props.images} handleFavorite={props.handleFavorite} />
  </div>
);

ImagesContainer.propTypes = {
  searchTerm: PropTypes.string,
  images: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func.isRequired
};

export default ImagesContainer;
