import React from "react";
import { Map, HeatMap, GoogleApiWrapper } from "google-maps-react";
import './LocationHeatMap.css'

const gradient = [
  "rgba(0, 255, 255, 0)",
  "rgba(0, 255, 255, 1)",
  "rgba(0, 191, 255, 1)",
  "rgba(0, 127, 255, 1)",
  "rgba(0, 63, 255, 1)",
  "rgba(0, 0, 255, 1)",
  "rgba(0, 0, 223, 1)",
  "rgba(0, 0, 191, 1)",
  "rgba(0, 0, 159, 1)",
  "rgba(0, 0, 127, 1)",
  "rgba(63, 0, 91, 1)",
  "rgba(127, 0, 63, 1)",
  "rgba(191, 0, 31, 1)",
  "rgba(255, 0, 0, 1)"
];

class LocationHeatMap extends React.Component {
  
  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          style={{width: '100%', height: '80%', position: 'relative'}}
          className={"map"}
          zoom={this.props.zoom}
          initialCenter={this.props.center}
          onReady={this.handleMapReady}
        >
          <HeatMap
            gradient={gradient}
            positions={this.props.positions}
            opacity={1}
            radius={10}
            maxIntensity={50}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "INSERT-YOUR-API-KEY-HERE",
  libraries: ["visualization"]
})(LocationHeatMap);
