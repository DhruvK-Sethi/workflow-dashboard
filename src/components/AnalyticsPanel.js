import React from 'react';
import {
  BarChart, Bar, PieChart, Pie, LineChart, Line,
  Tooltip, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer,
} from 'recharts';

const AnalyticsPanel = ({ nodes }) => {
  const data = nodes.map((node) => ({
    name: node.data.label,
    executionTime: node.data.executionTime || 0,
    type: node.type,
  }));

  return (
    <div className="analytics-panel">
      <h3>Analytics</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '5px' }} />
          <Legend />
          <Bar dataKey="executionTime" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '5px' }} />
          <Line type="monotone" dataKey="executionTime" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="executionTime"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${value}`}
          />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '5px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsPanel;
