import React from "react";
import "./Card.scss";

const Card = ({ children, className }) => {
  // get classes from children and add them to it
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
