import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; 

const DataAnalysisApp = () => {
  const [donations, setDonations] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const [foodSaved, setFoodSaved] = useState(0);
  const [peopleServed, setPeopleServed] = useState(0);
  const [co2Prevented, setCo2Prevented] = useState(0);

  useEffect(() => {
    
    const mockDonations = [
      { id: 1, foodType: 'Fruits', quantity: 30, timestamp: '2025-04-01', receiverId: 1 },
      { id: 2, foodType: 'Vegetables', quantity: 25, timestamp: '2025-04-02', receiverId: 2 },
      { id: 3, foodType: 'Bread', quantity: 15, timestamp: '2025-04-03', receiverId: 1 },
    ];
    const mockReceivers = [
      { id: 1, name: 'Receiver 1', capacity: 50, peopleServedPerKg: 2 },
      { id: 2, name: 'Receiver 2', capacity: 70, peopleServedPerKg: 3 },
    ];

    setDonations(mockDonations);
    setReceivers(mockReceivers);
  }, []);

  const processDonations = () => {
    let totalFoodSaved = 0;
    let totalPeopleServed = 0;
    let totalCo2Prevented = 0;
    let donationBreakdown = {}; 

    donations.forEach(donation => {
      const { quantity, receiverId, foodType } = donation;
      totalFoodSaved += quantity;

      
      if (donationBreakdown[foodType]) {
        donationBreakdown[foodType] += quantity;
      } else {
        donationBreakdown[foodType] = quantity;
      }

      const receiver = receivers.find(receiver => receiver.id === receiverId);
      if (receiver) {
        totalPeopleServed += receiver.peopleServedPerKg * quantity;
        totalCo2Prevented += quantity * 0.9; 
      }
    });

    console.log('Processed Donations:', totalFoodSaved, totalPeopleServed, totalCo2Prevented);

    setFoodSaved(totalFoodSaved);
    setPeopleServed(totalPeopleServed);
    setCo2Prevented(totalCo2Prevented);

    return donationBreakdown;
  };

  useEffect(() => {
    processDonations();
  }, [donations, receivers]);

  const pieChartData = () => {
    const breakdown = processDonations();
    return {
      labels: Object.keys(breakdown),
      datasets: [
        {
          data: Object.values(breakdown),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverOffset: 4,
        },
      ],
    };
  };

  const barChartData = () => {
    return {
      labels: ['Food Saved (kg)', 'People Served', 'CO₂ Prevented'],
      datasets: [
        {
          label: 'Impact Metrics',
          data: [foodSaved, peopleServed, co2Prevented],
          backgroundColor: '#4BC0C0',
        },
      ],
    };
  };

  const lineChartData = () => {
    const dates = donations.map(donation => donation.timestamp);
    const foodQuantities = donations.map(donation => donation.quantity);
    return {
      labels: dates,
      datasets: [
        {
          label: 'Food Donations Over Time',
          data: foodQuantities,
          borderColor: '#FF6384',
          fill: false,
          tension: 0.1,
        },
      ],
    };
  };

  return (
    <div className="logistics-system">
      <h1>Food Waste Management Logistics</h1>

      
      <div className="metrics">
        <h2>Impact Metrics</h2>
        <p><strong>Food Saved (kg):</strong> {foodSaved}</p>
        <p><strong>People Served:</strong> {peopleServed}</p>
        <p><strong>CO₂ Emission Prevented (kg):</strong> {co2Prevented}</p>
      </div>

      
      <div className="charts">
        <h2>Data Visualizations</h2>

        
        <div className="chart">
          <h3>Donation Breakdown by Food Type</h3>
          <Pie data={pieChartData()} />
        </div>

        
        <div className="chart">
          <h3>Impact Metrics</h3>
          <Bar data={barChartData()} />
        </div>

        
        <div className="chart">
          <h3>Food Donations Over Time</h3>
          <Line data={lineChartData()} />
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisApp;
