import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const ResultImages = props => (
  <ul>
    {props.images.map((image, index) => <Image key={index} url={image.url} />)}
  </ul>
);

ResultImages.propTypes = {
  images: PropTypes.array.isRequired
};

export default ResultImages;
