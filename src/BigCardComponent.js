import React from "react";

const BigCardComponent = props => {
  return (
    <div className="big-card">
      <div className="big-card__width">
        <h2> Current weather</h2>
        <p>{props.time}</p>
        <h1>
          {props.city}, {props.country}
        </h1>
      </div>
      {props.days.length > 0 && <p className="big-card__temp">{props.temp}°</p>}
      <div className="big-card__icon">
        <img src={`https://openweathermap.org/img/w/${props.icon}.png`} />
        <p style={{ paddingLeft: 10 }}>{props.description}</p>
      </div>
      <div className="big-card__sun">
        <div className="big-card__sunrise">
          <img src="https://icons.iconarchive.com/icons/iconsmind/outline/48/Sunrise-icon.png" />
          <p>
            Sunrise <br /> {props.sunrise}
          </p>
        </div>
        <div className="big-card__sunset">
          <img src="https://icons.iconarchive.com/icons/iconsmind/outline/48/Sunset-icon.png" />
          <p>
            Sunset <br /> {props.sunset}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCardComponent;
