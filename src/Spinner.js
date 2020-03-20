import React from "react";

const Spinner = ({ isShow }) => {
  if(isShow) {
    return (
        <div className="ui active dimmer">
          <div className="ui big text loader">
            Loading . . .
          </div>
        </div>
      );
  }
  return <div></div>;
};

export default Spinner;
