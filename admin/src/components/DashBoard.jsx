import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './Dashboard.css'; 

const Dashboard = () => {
  
  const data = {
    donations: [
      { date: '2025-04-01', quantity: 30 },
      { date: '2025-04-02', quantity: 25 },
      { date: '2025-04-03', quantity: 15 },
    ],
    receivers: [
      { name: 'Receiver 1', peopleServed: 60 },
      { name: 'Receiver 2', peopleServed: 75 },
    ],
    foodTypeDistribution: {
      Fruits: 50,
      Vegetables: 40,
      Bread: 30,
      Others: 20,
    },
  };

  
  const totalFoodSaved = data.donations.reduce((sum, donation) => sum + donation.quantity, 0);
  const totalPeopleServed = data.receivers.reduce((sum, receiver) => sum + receiver.peopleServed, 0);

  
  const pieChartData = {
    labels: Object.keys(data.foodTypeDistribution),
    datasets: [
      {
        data: Object.values(data.foodTypeDistribution),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  
  const barChartData = {
    labels: ['Food Saved (kg)', 'People Served'],
    datasets: [
      {
        label: 'Impact Metrics',
        data: [totalFoodSaved, totalPeopleServed],
        backgroundColor: '#4BC0C0',
      },
    ],
  };

 
  const lineChartData = {
    labels: data.donations.map((donation) => donation.date),
    datasets: [
      {
        label: 'Food Donations Over Time (kg)',
        data: data.donations.map((donation) => donation.quantity),
        borderColor: '#FF6384',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>Basic Dashboard Analysis</h1>

      <div className="metrics">
        <h2>Impact Metrics</h2>
        <p><strong>Total Food Saved (kg):</strong> {totalFoodSaved}</p>
        <p><strong>Total People Served:</strong> {totalPeopleServed}</p>
      </div>

      <div className="chart-container">
       
        <div className="chart">
          <h3>Food Type Distribution</h3>
          <Pie data={pieChartData} />
        </div>

        
        <div className="chart">
          <h3>Impact Metrics (Bar Chart)</h3>
          <Bar data={barChartData} />
        </div>

        
        <div className="chart">
          <h3>Food Donations Over Time</h3>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
