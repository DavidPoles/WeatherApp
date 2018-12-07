import React from "react";

const BigCardComponent = props => {
  return (
    <div className="big-card">
      <h2> Current weather</h2>
      <p>{props.time}</p>
      <h1>
        {props.city}, {props.country}
      </h1>
      {props.days.length > 0 && <p className="big-card__temp">{props.temp}°</p>}
      <img src={`https://openweathermap.org/img/w/${props.icon}.png`} />
      <p>{props.description}</p>
      <img src="https://icons.iconarchive.com/icons/iconsmind/outline/48/Sunrise-icon.png" />
      <p>Sunrise {props.sunrise}</p>
      <img src="http://icons.iconarchive.com/icons/iconsmind/outline/48/Sunset-icon.png" />
      <p>Sunset {props.sunset}</p>
    </div>
  );
};

export default BigCardComponent;
