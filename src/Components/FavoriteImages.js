import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const FavoriteImages = props => (
  <ul>
    {props.images.map((image, index) => (
      <Image key={index} url={image.images.preview_gif.url} />
    ))}
  </ul>
);

FavoriteImages.propTypes = {
  images: PropTypes.array.isRequired
};

export default FavoriteImages;
