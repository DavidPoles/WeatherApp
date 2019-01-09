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
            <p className="pTemp">{this.props.temp}°</p>
            <img
              src={`https://openweathermap.org/img/w/${this.props.icon}.png`}
            />
            <p>{this.props.description}</p>
          </div>
          <div className="card-component__face card-component__face--back">
            <div className="card-back__temp">
              <div className="card-back__temp-low">
                <i class="fas fa-temperature-low" />
                <p>
                  MIN <br /> {this.props.tempMin}°
                </p>
              </div>

              <div className="card-back__temp-high">
                <i class="fas fa-temperature-high " />
                <p>
                  MAX <br /> {this.props.tempMax}°
                </p>
              </div>
            </div>

            <div className="card-back__humidity-and-wind">
              <div className="card-back__clouds">
                <i className="fas fa-cloud" />
                <p>
                  CLOUDINESS <br />{" "}
                  <p style={{ marginLeft: -42 }}>{this.props.clouds}%</p>
                </p>
              </div>

              <div className="card-back__wind">
                <i class="fas fa-wind" />
                <p>
                  WIND SPEED <br /> {this.props.windSpeed} m/s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
