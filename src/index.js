import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import InputComponent from "./InputComponent";
import "typeface-roboto";
import "./styles/styles.scss";
import Typography from "@material-ui/core/Typography";
import CardComponent from "./CardComponent";

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
              <CardComponent
                i={index}
                flip={e => {
                  let card = document.getElementById(index);
                  card.classList.toggle("is-flipped");
                }}
                date={day.dt_txt.slice(5, 11)}
                temp={Math.round(day.main.temp)}
              />
            );
          });
        this.setState(() => {
          return {
            days: days,
            userInput: ""
          };
        });
      })
      .catch(error => {});
  };

  render() {
    return (
      <div>
        <div className="App">
          <h1 className="title">WORLD WEATHER</h1>
          <InputComponent
            handleFormSubmit={this.handleFormSubmit}
            handleChange={this.handleChange}
            userInput={this.state.userInput}
          />
        </div>
        {this.state.days}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
