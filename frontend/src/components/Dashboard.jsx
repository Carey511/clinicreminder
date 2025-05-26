// Dashboard.jsx
import React from 'react';

const Dashboard = ({ analytics }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="bg-blue-500 text-white p-4 rounded-xl">
      <h2>Total Patients</h2>
      <p className="text-3xl font-bold">{analytics.totalPatients}</p>
    </div>
    <div className="bg-orange-500 text-white p-4 rounded-xl">
      <h2>Pending Follow-Ups</h2>
      <p className="text-3xl font-bold">{analytics.pendingFollowUps}</p>
    </div>
    <div className="bg-green-500 text-white p-4 rounded-xl">
      <h2>Completed Today</h2>
      <p className="text-3xl font-bold">{analytics.completedToday}</p>
    </div>
    <div className="bg-purple-500 text-white p-4 rounded-xl">
      <h2>Response Rate</h2>
      <p className="text-3xl font-bold">{analytics.responseRate}%</p>
    </div>
  </div>
);

export default Dashboard;