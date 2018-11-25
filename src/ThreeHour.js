import React from "react";

export default class ThreeHour extends React.Component {
  render() {
    return (
      <div>
        <div className="card ForecastDays">
          <p>{this.props.mondayTemp}°</p>
          <p>{this.props.mondayTime}</p>
        </div>
        <div className="card ForecastDays">
          <p>{this.props.tuesdayTemp}°</p>
          <p>{this.props.tuesdayTime}</p>
        </div>
        <div className="card ForecastDays">
          <p>{this.props.wednesdayTemp}°</p>
          <p>{this.props.wednesdayTime}</p>
        </div>
        <div className="card ForecastDays">
          <p>{this.props.thursdayTemp}°</p>
          <p>{this.props.thursdayTime}</p>
        </div>
        <div className="card ForecastDays">
          <p>{this.props.fridayTemp}°</p>
          <p>{this.props.fridayTime}</p>
        </div>
      </div>
    );
  }
}
