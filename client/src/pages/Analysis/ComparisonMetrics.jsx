import React from 'react';
import { Bar } from 'react-chartjs-2';

// Sample data
const colleges = [
  { name: "College A", performance: 85 },
  { name: "College B", performance: 90 },
  { name: "College C", performance: 78 },
];

const batches = [
  { method: "Method A", performance: 88 },
  { method: "Method B", performance: 92 },
  { method: "Method C", performance: 80 },
];

// Function to get top college
const getTopCollege = (colleges) => {
  return colleges.reduce((top, college) => {
    return college.performance > top.performance ? college : top;
  });
};

// Function to get top batch method
const getTopBatchMethod = (batches) => {
  return batches.reduce((top, batch) => {
    return batch.performance > top.performance ? batch : top;
  });
};

// CollegePerformance Component
const CollegePerformance = ({ colleges }) => (
  <div className='mt-5'>
    <h2 className='text-2xl font-semibold'>College Performance</h2>
    <ul>
      {colleges.map((college, index) => (
        <li key={index}>
          {college.name}: {college.performance}
        </li>
      ))}
    </ul>
    <h3 className='mt-5 font-semibold text-2xl'>Top Performing College:</h3>
    <p className='font-semibold'>{getTopCollege(colleges).name} with performance {getTopCollege(colleges).performance}</p>

    {/* Visualization for College Performance */}
    <Bar
      className='bg-white font-bold text-xl'
      data={{
        labels: colleges.map(college => college.name),
        datasets: [
          {
            label: 'College Performance',
            data: colleges.map(college => college.performance),
            backgroundColor: '',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      }}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  </div>
);

// BatchPerformance Component
const BatchPerformance = ({ batches }) => (
  <div>
    <h2 className='text-2xl font-semibold mt-10'>Batch Performance</h2>
    <ul>
      {batches.map((batch, index) => (
        <li key={index}>
          {batch.method}: {batch.performance}
        </li>
      ))}
    </ul>
    <h3 className='text-2xl font-semibold mt-5'>Top Performing Batch Method:</h3>
    <p className='font-semibold'>{getTopBatchMethod(batches).method} with performance {getTopBatchMethod(batches).performance}</p>

    {/* Visualization for Batch Performance */}
    <Bar
      className='bg-white'
      data={{
        labels: batches.map(batch => batch.method),
        datasets: [
          {
            label: 'Batch Performance',
            data: batches.map(batch => batch.performance),
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      }}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  </div>
);

// Main App Component
const ComparisonMetrics = () => {
  return (
    <div className='start-page m-10 p-5 rounded-xl text-white'>
      <h1 className='text-3xl font-bold text-center'>Performance Comparison</h1>
      <CollegePerformance colleges={colleges} />
      <BatchPerformance batches={batches} />
    </div>
  );
};

export default ComparisonMetrics;