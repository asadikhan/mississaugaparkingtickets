import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Churchill Meadows', 'Port Credit', 'Meadowvale', 'Lisgar', 'Erin Mills', 'City Hall'],
  datasets: [
    {
      label: 'Neighbourhoods',
      data: [49557, 40964, 31623, 38215, 22350, 40522],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

export function DashboardRadarChart() {
  return <>
   <Radar data={data} />
   <h6>Tickets by Neighbourhoods</h6>
  </>
}
