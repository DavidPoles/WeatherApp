import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

const InputComponent = props => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <div class="input-group input-group-lg" style={{ padding: 50 }}>
          <div class="input-group-prepend" />
          <input
            type="text"
            className="form-control input-component"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={props.handleChange}
            placeholder="Enter City Name"
            value={props.userInput}
          />
        </div>
        <button className="btn" style={{ width: 200 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputComponent;
