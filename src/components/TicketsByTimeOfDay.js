import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GetParkingTicketTimes } from "../helper/DataReader.js";
import { LoadParkingTicketsData } from "../helper/DataReader.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Mississauga Parking Tickets by Time of Day",
      font: { size: "25" },
    },
  },
  /*
  animation: {
    duration: 0,
  },
  hover: {
    animationDuration: 0,
  },
  */
};

const labels = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

var chartDataSets = [];

export var sdata = {
  labels,
  datasets: chartDataSets,
};

export function TicketsByTimeOfDay() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (chartDataSets.length === 0) {
      LoadParkingTicketsData()
        .then((res) => {
          if (chartDataSets.length === 0) {
            GetParkingTicketTimes("2016").then(function (payLoad) {
              chartDataSets.push({
                label: "2016",
                data: payLoad,
                borderColor: "#FF6183",
                backgroundColor: "#FFB1C1",
                tension: 0.1,
              });
            });

            GetParkingTicketTimes("2017").then(function (payLoad) {
              chartDataSets.push({
                label: "2017",
                data: payLoad,
                borderColor: "#34A1EB",
                backgroundColor: "#9AD0F5",
                tension: 0.1,
              });
            });

            GetParkingTicketTimes("2018").then(function (payLoad) {
              chartDataSets.push({
                label: "2018",
                data: payLoad,
                borderColor: "#FFCD54",
                backgroundColor: "#FFE6AA",
                tension: 0.1,
              });
            });

            GetParkingTicketTimes("2019").then(function (payLoad) {
              chartDataSets.push({
                label: "2019",
                data: payLoad,
                borderColor: "#71CDCD",
                backgroundColor: "#A5DFDF",
                tension: 0.1,
              });
            });

            GetParkingTicketTimes("2020").then(function (payLoad) {
              chartDataSets.push({
                label: "2020",
                data: payLoad,
                borderColor: "#9864FF",
                backgroundColor: "#CCB2FF",
                tension: 0.1,
              });
            });

            GetParkingTicketTimes("2021").then(function (payLoad) {
              chartDataSets.push({
                label: "2021",
                data: payLoad,
                borderColor: "#00E1FF",
                backgroundColor: "#B2F9FF",
                tension: 0.1,
              });
            });
          }
        })
        .finally(() => {
          sdata = {
            labels,
            datasets: chartDataSets,
          };
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  } else {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h4>Mississauga Parking Tickets by Time of Day</h4>
        </div>
        <Line options={options} data={sdata} />
        <div>
          <br />
          This chart shows the number of parking tickets issued between 2016 and
          2021 by time of day. There seems to be a peak in parking tickets
          overnight between 2am and 4am, and a slight hump after lunch around
          2pm.
          <br />
          Note: The 2018 data seems to have a bit of an anamoly in that there
          isn't any data past 12:00 in the dataset provided by the city. It is
          likely that the 13:00 onwards data was tagged as 1:00 which would
          explain the outlying behavior of 2018 data. To exclude 2018 from the
          visualization, click on it in the legend on the top.
        </div>
      </div>
    );
  }
}

export default TicketsByTimeOfDay;
