import React from "react";

const InputComponent = props => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input
          onChange={props.handleChange}
          placeholder="Enter City Name"
          value={props.userInput}
          style={{ width: 500 }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InputComponent;
