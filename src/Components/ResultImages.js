import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const ResultImages = props => (
  <ul>
    {props.images.map((image, index) => (
      <Image key={index} url={image.images.fixed_height.url} />
    ))}
  </ul>
);

ResultImages.propTypes = {
  images: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func.isRequired
};

export default ResultImages;
