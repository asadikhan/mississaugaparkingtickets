import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Fines in $',
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: 100, max: 500 }),
        y: faker.datatype.number({ min: 10000, max: 40000 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '# of Tickets',
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: 100, max: 500 }),
        y: faker.datatype.number({ min: 10000, max: 40000 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function DashboardBubbleChart() {
  return <>
  <Bubble options={options} data={data} />
  <h6>Fines in $ vs. # of Tickets</h6>
  </>

}
