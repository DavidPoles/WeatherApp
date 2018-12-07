import React from "react";

class CardComponent extends React.Component {
  render() {
    return (
      <div className="scene">
        <div
          id={this.props.i}
          className="card-component"
          onClick={this.props.flip}
        >
          <div className="card-component__face card-component__face--front">
            <p className="dateStyle">{this.props.date}</p>
            <img
              src={`https://openweathermap.org/img/w/${this.props.icon}.png`}
            />
            <p>{this.props.description}</p>
            <p className="pTemp">{this.props.temp}°</p>
          </div>
          <div className="card-component__face card-component__face--back">
            <p>Min: {this.props.tempMin}°</p>
            <i class="fas fa-temperature-low fa-2x" />
            <p>Max: {this.props.tempMax}°</p>
            <i class="fas fa-temperature-high fa-2x" />
            <img src="http://icons.iconarchive.com/icons/icons8/windows-8/48/Science-Humidity-icon.png" />
            <p>Humidity: {this.props.humidity}%</p>
            <i class="fas fa-wind fa-2x" />
            <p>Wind Speed: {this.props.windSpeed} meter/sec</p>
            <i class="fas fa-cloud fa-2x" />
            <p>Cloudiness: {this.props.clouds}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
