import React from "react";
import ThreeHour from "./ThreeHour";

export default class WeatherDays extends React.Component {
  render() {
    return (
      <div>
        <div className="card WeatherDays">
          <p>{this.props.day}</p>
          {this.props.temp >= 15 ? (
            <i className="fas fa-sun icons fa-3x" />
          ) : (
            <i className="fas fa-cloud-sun-rain fa-3x" />
          )}
        </div>
        <div>
          <ThreeHour />
        </div>
      </div>
    );
  }
}
