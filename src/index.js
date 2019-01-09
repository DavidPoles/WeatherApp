import React from "react";
import ReactDOM from "react-dom";
import InputComponent from "./InputComponent";
import "./styles/styles.scss";
import CardComponent from "./CardComponent";
import BigCardComponent from "./BigCardComponent";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    days: [],
    userInput: "",
    city: "",
    current: "",
    icon: "",
    country: "",
    description: "",
    sunrise: "",
    sunset: "",
    time: "",
    error: ""
  };

  handleErrors = response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
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
      .then(this.handleErrors)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let days = data.list;

        this.setState(() => {
          return {
            days: days,
            userInput: "",
            city: data.city.name,
            country: data.city.country,
            error: ""
          };
        });
      })
      .catch(error => {
        error = "Cannot find city";
        this.setState({ error });
      });

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.state.userInput +
        "&units=metric&APPID=028d85518865ffa64616dee5389f0ea3"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        let current = data.main.temp;
        let date = new Date();

        this.setState({
          current: current,
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          sunrise: new Date(data.sys.sunrise * 1000),
          sunset: new Date(data.sys.sunset * 1000),
          time: new Date(data.dt * 1000)
        });
      })
      .catch(error => {});
  };

  render() {
    return (
      <div className="App">
        <nav className="input">
          <InputComponent
            handleFormSubmit={this.handleFormSubmit}
            handleChange={this.handleChange}
            userInput={this.state.userInput}
            error={this.state.error.toString()}
          />
        </nav>
        {this.state.error && <p className="error">{this.state.error}</p>}
        {this.state.days.length > 0 && (
          <BigCardComponent
            time={this.state.time.toString().slice(15, 21)}
            city={this.state.city}
            country={this.state.country}
            temp={Math.round(this.state.current)}
            days={this.state.days}
            icon={this.state.icon}
            description={this.state.description}
            sunrise={this.state.sunrise.toString().slice(15, 21)}
            sunset={this.state.sunset.toString().slice(15, 21)}
          />
        )}
        <div className="card-div">
          {this.state.days.length > 0 &&
            this.state.days
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
                    date={new Date(day.dt * 1000).toString().slice(0, 10)}
                    temp={Math.round(day.main.temp)}
                    icon={day.weather[0].icon}
                    description={day.weather[0].description}
                    tempMin={day.main.temp_min}
                    tempMax={day.main.temp_max}
                    humidity={day.main.humidity}
                    windSpeed={Math.round(day.wind.speed)}
                    clouds={day.clouds.all}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
