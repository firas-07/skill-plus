import { color } from 'chart.js/helpers';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

// Mock data for demonstration
const performanceData = [
  { batch: 'Java Full Stack', score: 78, certifications: 2, internships: 1, knownLanguages: 3 },
  { batch: '.NET Development', score: 60, certifications: 1, internships: 2, knownLanguages: 4 },
  { batch: 'Data Engineering', score: 90, certifications: 3, internships: 2, knownLanguages: 5 },
];

function PerformanceTrends() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(performanceData);
  }, []);

  return (
    <div className='start-page m-10 p-10 rounded-xl text-white'>
      <h2 className='text-3xl font-bold text-center'>Performance Trends Analysis</h2>
      
      <div className="chart-container">
        <h3 className='mt-10 text-2xl font-semibold'>Batch Performance Over Time</h3>
        <LineChart
          width={1200}
          height={600}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className='bg-white p-5 m-5 text-xl font-bold'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="batch" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="red" name="Score" />
        </LineChart>
      </div>

      <div className="chart-container">
        <h3 className='mt-5 text-2xl font-semibold'>Impact of Certifications on Performance</h3>
        <BarChart
          width={1200}
          height={600}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className='bg-white p-5 m-5 text-xl font-bold'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="batch" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="certifications" fill="#82ca9d" name="Certifications" />
          <Bar dataKey="internships" fill="#8884d8" name="Internships" />
        </BarChart>
      </div>

      <div className="chart-container">
        <h3 className='mt-10 text-2xl font-semibold'>Correlation Between Programming Languages Known and Performance</h3>
        <LineChart
          width={1200}
          height={600}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          className='bg-white p-5 m-5 text-xl font-bold'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="batch" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="knownLanguages" stroke="#82ca9d" name="Languages Known" />
          <Line type="monotone" dataKey="score" stroke="#8884d8" name="Score" />
        </LineChart>
      </div>
    </div>
  );
}

export default PerformanceTrends;
