import React from "react";
import PropTypes from "prop-types";
import ResultImages from "./ResultImages";
import FavoriteImages from "./FavoriteImages";

const ImagesContainer = props => (
  <div>
    <ResultImages images={props.images} />
    <FavoriteImages images={props.images} />
  </div>
);

ImagesContainer.propTypes = {
  searchTerm: PropTypes.string,
  images: PropTypes.array.isRequired
};

export default ImagesContainer;
