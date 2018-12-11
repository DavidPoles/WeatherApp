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
            <p>15:00</p>
            <p className="pTemp">{this.props.temp}°</p>
            <img
              src={`https://openweathermap.org/img/w/${this.props.icon}.png`}
            />
            <p>{this.props.description}</p>
          </div>
          <div className="card-component__face card-component__face--back">
            <div className="card-back__tempMin">
              <i class="fas fa-temperature-low" />
              <p>MIN {this.props.tempMin}°</p>
            </div>

            <div className="card-back__tempHigh">
              <i class="fas fa-temperature-high " />
              <p>MAX {this.props.tempMax}°</p>
            </div>

            <div className="card-back__humidity">
              <img src="http://icons.iconarchive.com/icons/icons8/ios7/24/Science-Humidity-icon.png" />
              <p>
                HUMIDITY <br /> {this.props.humidity}%
              </p>
            </div>

            <div className="card-back__wind-speed">
              <i class="fas fa-wind" />
              <p>
                WIND SPEED <br /> {this.props.windSpeed} meter/sec
              </p>
            </div>

            <div className="card-back__clouds">
              <i class="fas fa-cloud" />
              <p>
                CLOUDINESS <br /> {this.props.clouds}%
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
