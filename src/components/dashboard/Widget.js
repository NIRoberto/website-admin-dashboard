/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Widget = ({ dark, setOpen }) => {
  const data = {
    labels: ['jan', 'feb ', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept'],
    datasets: [
      {
        label: 'Income  for 2020 ($)',
        data: [1, 2, 3, 4, 5, 6, 6, 4, 5],
        borderColor: 'red',
        backgroundColor: '#269DF8',
        pointBackgroundColor: '#d4e7f4',
      },
      {
        label: 'Income for 2019 ($)',
        data: [2, 8, 6, 7, 8, 8, 6, 7, 3],
        backgroundColor: '#d4e7f4',
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Income year  chart',
    },
    scales: {
      yAxes: {
        ticks: {
          min: 0,
          max: 1000,
          stepSize: 100,
        },
      },
    },
  };
  const data1 = {
    labels: ['jan', 'feb ', 'mar', 'apr', 'may', 'june', 'july', 'aug'],
    datasets: [
      {
        label: 'Project  for 2020 ($)',
        data: [8, 7, 4, 2, 8, 5, 3, 6],
        borderColor: '',
        backgroundColor: '#269DF8',
        pointBackgroundColor: '#d4e7f4',
      },
      {
        label: 'Post for 2019 ($)',
        data: [1, 2, 3, 4, 5, 3, 7, 8],
        backgroundColor: '#d4e7f4',
      },
    ],
  };

  const options1 = {
    title: {
      display: true,
      text: 'Project',
    },
    scales: {
      yAxes: {
        ticks: {
          min: 0,
          max: 1000,
          stepSize: 100,
        },
      },
    },
  };
  const data2 = {
    datasets: [
      {
        label: 'Income  for 2020 ($)',
        data: [1, 2, 3, 4, 5, 6, 6, 4, 5],
      },
    ],
  };

  const options2 = {
    title: {
      display: true,
      text: 'Social report ',
    },
    scales: {
      yAxes: {
        ticks: {
          min: 0,
          max: 1000,
          stepSize: 100,
        },
      },
    },
  };
  const data4 = {
    labels: ['Facebook', 'Twitter ', 'IG', 'LinkedIn'],
    datasets: [
      {
        label: 'Facebook  for 2020 ($)',
        data: [4000, 3000, 2000, 1000],
        backgroundColor: ['#3B5998', '#269DF8', '#f90909', '#3e61a8'],
      },
    ],
  };

  const options4 = {
    title: {
      display: true,
      text: 'Project',
    },
    scales: {
      yAxes: {
        ticks: {
          min: 0,
          max: 1000,
          stepSize: 100,
        },
      },
    },
  };
  return (
    <div
      className={`${
        dark ? 'bg-dark text-white' : 'bg-surface text-gray-800'
      } col-end-13 bg-surface col-start-1 lg:col-start-3    row-start-2  row-end-4 p-3`}
      onClick={() => setOpen(false)}
    >
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-md  col-span-2 shadow-md">
          <Bar data={data} options={options} />
        </div>
        <div className="rounded-md shadow-md w-full h-full bg-white">
          <Line data={data1} height={280} options={options1} />
        </div>
      </div>
      <ToastContainer />

      <div className="grid grid-cols-4 my-4 gap-4">
        {/* <div className="bg-white rounded-md  shadow-md">
          <Line data={data2} options={options2} />
        </div>
        <div className="bg-white rounded-md  shadow-md">
          <Line data={data2} options={options2} />
        </div>{" "}
        <div className="bg-white rounded-md  shadow-md">
          <Line data={data2} options={options2} />
        </div>
        <div className=" border border-main w-full h-full bg-white">
          <Line data={data2} height={200} options={options2} />
        </div> */}
      </div>
      <div className="grid grid-cols-1 h-3/6 my-4 gap-4">
        <div className="  w-full h-full bg-white shadow-md rounded-md">
          <Doughnut data={data4} height={200} options={options4} />
        </div>
      </div>
    </div>
  );
};

export default Widget;
