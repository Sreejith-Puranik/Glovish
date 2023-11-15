import React from "react";
import "../ComponentCss/Arrows.css";

const NextArrow = (props) => (
  <div className="slick-arrow arr-next">
    <img
      src="https://cdn-icons-png.flaticon.com/512/66/66831.png"
      alt="Next"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className="arr"
    />
  </div>
);

export default NextArrow;
