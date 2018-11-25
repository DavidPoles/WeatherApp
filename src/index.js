import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import InputComponent from "./InputComponent";
import "./styles.css";

const pStyle = {
  fontSize: "40px",
  textAlign: "center",
  paddingTop: "50px"
};

class App extends React.Component {
  state = {
    days: [],
    userInput: ""
  };

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        this.state.userInput +
        "&units=metric&APPID=028d85518865ffa64616dee5389f0ea3"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let days = data.list
          .filter(day => {
            return day.dt_txt.endsWith("15:00:00");
          })
          .map((day, index) => {
            return (
              <div key={index}>
                <div className="card WeatherDays">
                  <p style={{ paddingTop: 20 }}>{day.dt_txt.slice(5, 11)}</p>
                  <p style={pStyle}>{Math.round(day.main.temp)}°</p>
                  {day.main.temp >= 15 ? (
                    <i className="fas fa-sun icons fa-5x" />
                  ) : (
                    <i className="fas fa-cloud-sun-rain fa-5x" />
                  )}
                </div>
              </div>
            );
          });
        this.setState(() => {
          return {
            days: days,
            userInput: ""
          };
        });
      })
      .catch(error => {
        let errors = error;
      });
  };

  render() {
    return (
      <div className="App container">
        <InputComponent
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}
          userInput={this.state.userInput}
        />
        <div className="row">{this.state.days}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
