import React from "react";

const InputComponent = props => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <div class="input-group input-group-lg" style={{ padding: 50 }}>
          <div class="input-group-prepend" />
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            onChange={props.handleChange}
            placeholder="Enter City Name"
            value={props.userInput}
          />
        </div>
        <button className="btn btn-secondary btn-lg" style={{ width: 200 }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputComponent;
