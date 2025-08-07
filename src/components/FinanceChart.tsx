'use client'

import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const FinanceChart = () => {
    const Utils = {
    months({ count }: { count: number }): string[]{
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December'];
    const out = [];
    const now = new Date().getMonth();
    for (let i = 0; i < count; i++) {
      out.push(MONTHS[(now + i) % 12]);
    }
    return out;
  }
};
    const labels = Utils.months({count: 7});
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

  return (
    <div className="h-[300px] w-[80%] max-w-5xl mx-auto">
    <Line data={data} 
    options={{
      maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }} />
    </div>
  )
}

export default FinanceChart