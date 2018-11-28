import React from "react";

const CardComponent = props => {
  return (
    <div className="scene">
      <div id={props.i} className="card-component" onClick={props.flip}>
        <div className="card-component__face card-component__face--front">
          <p className="dateStyle">{props.date}</p>
          <p className="pTemp">{props.temp}°</p>
        </div>
        <div className="card-component__face card-component__face--back">
          BACKSIDE
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
