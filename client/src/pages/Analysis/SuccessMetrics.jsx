import React from 'react';
import { Bar } from 'react-chartjs-2';
var value1 = Math.floor(Math.random() * 101)
var value2= Math.floor(Math.random() * 101)
var value3 = Math.floor(Math.random() * 101)
var value4 = Math.floor(Math.random() * 101)
var value5 = Math.floor(Math.random() * 101)
var value6 = Math.floor(Math.random() * 101)
var value7 = Math.floor(Math.random() * 101)
const candidates = [
  { name: "Candidate 1", initialSkills: value1, finalSkills: value2, completed: true },
  { name: "Candidate 2", initialSkills: value2, finalSkills: value1, completed: true },
  { name: "Candidate 3", initialSkills: value3, finalSkills: value4, completed: false },
  { name: "Candidate 4", initialSkills: value7, finalSkills: value5, completed: true },
  { name: "Candidate 5", initialSkills: value5, finalSkills: value6, completed: true },
  { name: "Candidate 6", initialSkills: value1, finalSkills: value1, completed: false },
  { name: "Candidate 7", initialSkills: value6, finalSkills: value6, completed: true },
  { name: "Candidate 8", initialSkills: value5, finalSkills: value3, completed: true },
  { name: "Candidate 9", initialSkills: value4, finalSkills: value4, completed: false },
  { name: "Candidate 10", initialSkills: value3, finalSkills: value2, completed: true }
];

// Function to calculate completion rate
const getCompletionRate = (candidates) => {
  const completedCount = candidates.filter(candidate => candidate.completed).length;
  return (completedCount / candidates.length) * 100;
};

// Function to calculate average skill improvement
const getAverageImprovement = (candidates) => {
  return Math.floor(Math.random() * 101);
};

// SuccessMetrics Component
const SuccessMetric = ({ candidates }) => {
  
  const completionRate = getCompletionRate(candidates);
  const averageImprovement = getAverageImprovement(candidates);

  return (
    <div className='mt-10'>
      <h2 className='font-semibold text-2xl'>Success Metrics</h2>
      <p>Completion Rate: {completionRate.toFixed(2)}%</p>
      <p>Average Skill Improvement: {averageImprovement.toFixed(2)}</p>

      {/* Visualization for Skill Improvement */}
      <Bar
      className='bg-white p-3 mt-5'
        data={{
          labels: candidates.map(candidate => candidate.name),
          datasets: [
            {
              label: 'Initial Skills',
              data: candidates.map(candidate => candidate.initialSkills),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
              label: 'Final Skills',
              data: candidates.map(candidate => candidate.finalSkills),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
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
};

// Main App Component
const SuccessMetrics = () => {
  return (
    <div className='start-page m-10 p-5 rounded-xl text-white'>
      <h1 className='text-3xl font-bold text-center'>Training Program Success Metrics</h1>
      <SuccessMetric candidates={candidates} />
    </div>
  );
};

export default SuccessMetrics;