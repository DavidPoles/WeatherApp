import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    mondayTemp: 17,
    tuesdayTemp: 14,
    wednesdayTemp: 21,
    thursdayTemp: 18,
    fridayTemp: 9
  };

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-">
            <WeatherDay day="Monday" temp={this.state.mondayTemp} />
          </div>
          <div className="col-">
            <WeatherDay day="Tuesday" temp={this.state.tuesdayTemp} />
          </div>
          <div className="col-">
            <WeatherDay day="Wednesday" temp={this.state.wednesdayTemp} />
          </div>
          <div className="col-">
            <WeatherDay day="Thursday" temp={this.state.thursdayTemp} />
          </div>
          <div className="col-">
            <WeatherDay day="Friday" temp={this.state.fridayTemp} />
          </div>
        </div>
      </div>
    );
  }
}

class WeatherDay extends React.Component {
  render() {
    return (
      <div className="card WeatherDays container">
        <p>{this.props.day}</p>
        {this.props.temp >= 15 ? (
          <i className="fas fa-sun icons fa-3x" />
        ) : (
          <i class="fas fa-cloud-sun-rain fa-3x" />
        )}
        <p style={{ paddingTop: 8 }}>{this.props.temp}°</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
