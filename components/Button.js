import React from "react";

const Button = ({ classes, title }) => {
  return (
    <div>
      <button className={classes}>{title}</button>
    </div>
  );
};

export default Button;
