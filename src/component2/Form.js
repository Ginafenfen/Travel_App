import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you'd like to go</label>
            <br />

            <input
              type="text"
              placeholder="Destination..."
              className="input"
              onChange={props.handleNewDestination}
            />
          </div>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Check in date</label>
            <br />
            <input
              type="date"
              className="CheckIn"
              value={props.checkIn}
              onChange={props.handleNewcCheckIn}
            />
          </div>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Check out date</label>
            <br />

            <input
              type="date"
              className="CheckIn"
              value={props.checkOut}
              onChange={props.handleNewCheckOut}
            />
          </div>
          <button className="button1" type="submit">
            confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
