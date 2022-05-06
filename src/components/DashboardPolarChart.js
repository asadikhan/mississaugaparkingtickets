import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
  title: {
    display: true,
    text: "Chart.js Polar Area Chart",
    font: { size: "25" },
  },
};
export const data = {
  labels: ["Private Prop.", "Hydrant", "Wrong Dir.", "After Hours", "Traffic Obs.", "Prohibited"],
  datasets: [
    {
      label: "# of Votes",
      data: [49557, 20964, 11623, 18215, 12350, 40522],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function DashboardPolarChart() {
  return  <>
    <PolarArea options={options} data={data} />
    <h6>Tickets by Description</h6>
  </>;
}
