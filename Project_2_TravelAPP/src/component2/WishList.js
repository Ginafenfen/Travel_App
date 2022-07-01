import React, { useState } from "react";
import PageTwo from "../component1/PageTwo";
import CompletedForm from "./CompletedForm";
import Form from "./Form";

const WishList = (props) => {
  // const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [updateList, setUpdateList] = useState("");
  const [hasSubmited, setHasSubmited] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWishList = { input: props.input, checkIn, checkOut };

    setUpdateList([props.input, checkIn, checkOut]);
    setHasSubmited(true);

    props.addToWishList(newWishList);
    setFormError(newWishList);
    setIsSubmit(true);

    props.setInput("");
    setCheckIn("");
    setCheckOut("");
  };

  const handleNewDestination = (event) => {
    props.setInput(event.target.value);
  };

  const handleNewcCheckIn = (event) => {
    setCheckIn(event.target.value);
  };

  const handleNewCheckOut = (event) => {
    setCheckOut(event.target.value);
    console.log(event.target.value);
  };

  const handleClearButton = () => {
    setHasSubmited(false);
  };

  return (
    <div>
      {hasSubmited ? (
        <CompletedForm updateList={updateList} />
      ) : (
        <Form
          handleSubmit={handleSubmit}
          handleNewDestination={handleNewDestination}
          handleNewcCheckIn={handleNewcCheckIn}
          handleNewCheckOut={handleNewCheckOut}
        />
      )}
      <button onClick={handleClearButton}>clear</button>
    </div>
  );
};
export default WishList;
