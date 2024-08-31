import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoGitCommitOutline } from "react-icons/io5"; // Import icons for Orders and Sales

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const App = () => {
  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#E76161', '#6AD4DD'],
        borderWidth: 0,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          boxHeight: 10,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const lineData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1.6, 0.8, 0.8],
        borderColor: 'orange',
        borderWidth: 1,
        pointStyle: 'circle',
        pointBackgroundColor: 'orange',
        pointRadius: 4,
        tension: 0.3,
      },
      {
        label: 'Sales',
        data: [1.4, 0.8, 0.5],
        borderColor: 'cyan',
        borderWidth: 1,
        pointStyle: 'circle',
        pointBackgroundColor: 'cyan',
        pointRadius: 4,
        tension: 0.3,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
          borderDash: [5, 5],
          drawOnChartArea: true,
          drawBorder: false,
        },
        border: {
          display: true,
          color: 'black',
        },
      },
      y: {
        position: 'left',
        beginAtZero: true,
        min: 0,
        max: 1.6,
        grid: {
          display: true,
          borderDash: [5, 5],
          drawOnChartArea: true,
          drawBorder: false,
        },
        border: {
          display: true,
          color: 'black',
        },
        ticks: {
          stepSize: 0.4,
          callback: function (value) {
            return value.toFixed(1) + 'k';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,  // Hide the default legend
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-[65%] relative bg-white m-3'>
        <h1 className="p-2 text-xl flex items-center">
          Sales of Orders
          <IoInformationCircleOutline className="ml-1" />
        </h1>
        <hr />
        <div className="relative w-full h-auto">
          {/* Container for icons and Line Chart */}
          <div className="relative">
            {/* Flex container for icons above the chart */}
            <div className="relative flex flex-col md:flex-row justify-center py-2">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex items-center">
                  <IoGitCommitOutline className="text-orange-500 w-5 h-5 mr-2" />
                  <span>Orders</span>
                </div>
                <div className="flex items-center">
                  <IoGitCommitOutline className="text-cyan-500 w-5 h-5 mr-2" />
                  <span>Sales</span>
                </div>
              </div>
            </div>
            {/* Line Chart */}
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
        <div className="absolute top-1/3 ml-4 px-4">
          <div className="flex items-center">
            <div>6/30/2024 - 7/6/2024</div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            <div>Orders - 4</div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
            <div>Sales - 1404</div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
            <div>Avg Order Value - 351.00</div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-[35%] relative bg-white m-3'>
        <h1 className="p-2 text-xl flex items-center">
          Portion of Sales
          <IoInformationCircleOutline className="ml-1" />
        </h1>
        <hr />
        <div className="relative w-full h-full mx-auto p-4">
          <Pie data={pieData} options={pieOptions} />
          <div className="absolute inset-0 flex items-center justify-center -mt-10">
            <div className="text-center">
              <div className="text-black font-semibold text-md">Total</div>
              <div className="text-black font-semibold text-xl">2659</div>
            </div>
          </div>
          <div className="absolute top-24 left-[110px] transform -translate-x-1/2 text-white font-bold text-lg">
            44.2%
          </div>
          <div className="absolute top-1/2 right-[75px] transform -translate-y-1/2 text-white font-bold text-lg">
            55.8%
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



