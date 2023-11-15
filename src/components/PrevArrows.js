import React from "react";
import "../ComponentCss/Arrows.css";

const PrevArrows = (props) => (
  <div className="slick-arrow arr-prev">
    <img
      src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
      alt="Previous"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className="arr"
    />
  </div>
);

export default PrevArrows;
