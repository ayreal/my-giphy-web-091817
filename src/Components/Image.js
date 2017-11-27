import React from "react";
import PropTypes from "prop-types";

const Image = props => (
  <div>
    <li>
      <img src={props.url} alt="" />
      <br />
      <button onClick>Fave?</button>
    </li>
  </div>
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Image;
