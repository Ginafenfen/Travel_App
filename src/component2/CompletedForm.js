import React from "react";

const CompletedForm = (props) => {
  return (
    <div>
      <h4>Your next destination is {props.updateList[0]}</h4>
      <h4>Check in on {props.updateList[1]}</h4>
      <h4>Check out on {props.updateList[2]}</h4>
    </div>
  );
};

export default CompletedForm;
