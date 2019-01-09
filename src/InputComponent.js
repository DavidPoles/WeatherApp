import React from "react";

const InputComponent = props => {
  return (
    <div className="form">
      <form onSubmit={props.handleFormSubmit}>
        <h1 className="header__title">WORLD WEATHER</h1>
        <input
          type="text"
          className="header__input-component"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          onChange={props.handleChange}
          placeholder="Enter City"
          value={props.userInput}
        />
        <button className="header__button">Submit</button>
      </form>
    </div>
  );
};

export default InputComponent;
