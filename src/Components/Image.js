import React from "react";
import PropTypes from "prop-types";

const Image = props => (
  <div>
    <img src={props.url} alt="" />
    <br />
    <button>Fave?</button>
  </div>
);

Image.propTypes = {
  url: PropTypes.string.isRequired
};

export default Image;
