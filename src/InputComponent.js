import React from "react";

const InputComponent = props => {
  return (
    <div className="form">
      <form onSubmit={props.handleFormSubmit}>
        <input
          type="text"
          className="input-component"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          onChange={props.handleChange}
          placeholder="Enter City Name"
          value={props.userInput}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InputComponent;
