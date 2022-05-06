import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import "./LeftNav.css";

const getAlertMessage = (key) => {
  if (key.queryClicked === "q1") {
    return "Publicly available parking tickets data since 2016 from the city of Mississauga mapped on a Chart.js line chart by the hour of the day.";
  } else if (key.queryClicked === "q2") {
    return "A sample analytics dashboard built using React Bootstrap and Chart.JS.";
  } else if (key.queryClicked === "q3") {
    return "Publicly available parking tickets data from 2021, geocoded via https://nominatim.org/ and then displayed on a Google Maps heatmap. ";
  }
};

const LeftNav = (props) => {
  const [showAlert, toggleShowAlert] = useState(false);
  const [queryClicked, changeQueryClicked] = useState();

  const toggle = (query) => {
    if (query === queryClicked || (query !== queryClicked && !showAlert)) {
      toggleShowAlert(!showAlert);
    }
    changeQueryClicked(query);
  };

  return (
    <div className="center">
      <br />
      <h3>City of Mississauga</h3>
      <h4>Parking Tickets Analytics</h4>
      <br />
      <br />
      <Button
        variant="light"
        id="q1"
        onClick={() => {
          toggle("q1");
          props.handleClickEventProps("q1");
        }}
      >
        What time of day are most tickets issued?
      </Button>
      <br />
      <br />
      <Button
        variant="light"
        id="q3"
        onClick={() => {
          toggle("q3");
          props.handleClickEventProps("q3");
        }}
      >
        What geo locations are most tickets issued?
      </Button>
      <br />
      <br />
      <Button
        variant="light"
        id="q2"
        onClick={() => {
          toggle("q2");
          props.handleClickEventProps("q2");
        }}
      >
        Analytics Dashboard
      </Button>
      <br />
      <br />

      {showAlert && (
        <Alert key="secondary" variant="secondary">
          {getAlertMessage({ queryClicked })}
        </Alert>
      )}
    </div>
  );
};

export default LeftNav;
