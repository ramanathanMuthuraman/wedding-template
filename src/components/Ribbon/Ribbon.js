import React from "react";
import "./Ribbon.css";

const Ribbon = (props) => {
  return <div className="ribbon">{props.children}</div>;
};

export default Ribbon;
