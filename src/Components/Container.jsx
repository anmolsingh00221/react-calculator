import React from "react";

const Container = (props) => {
  return (
    <div className="container border border-secondary-subtle cal-container ">
      {props.children}
    </div>
  );
};

export default Container;
