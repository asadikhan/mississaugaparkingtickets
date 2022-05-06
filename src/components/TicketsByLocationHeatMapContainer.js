import React, { useEffect, useState } from "react";
import LocationHeatMap from "./LocationHeatMap";
import { LoadLatLongData } from "../helper/DataReader.js";

var data = [];

const TicketsByLocationHeatMapContainer = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    LoadLatLongData()
      .then(function (payLoad) {
        data = payLoad;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h4>Mississauga Parking Tickets Heatmap by Location</h4>
        </div>
        <div>
          This chart shows the heatmap based on where most tickets were issued
          by the city. Looks like the area around the Mississauga City Hall and
          some lakefront areas are particularly notorious.
        </div>
        <div>
          <LocationHeatMap
            center={{ lat: 43.589, lng: -79.644 }}
            zoom={11}
            positions={data}
          />
        </div>
      </div>
    );
  }
};

export default TicketsByLocationHeatMapContainer;
