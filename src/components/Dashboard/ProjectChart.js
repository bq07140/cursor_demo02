import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const ProjectChart = () => {
  const data = [
    { name: '电商平台', completed: 85, total: 100 },
    { name: '移动应用', completed: 65, total: 100 },
    { name: '数据分析', completed: 45, total: 100 },
    { name: '用户系统', completed: 90, total: 100 },
    { name: '支付模块', completed: 30, total: 100 },
    { name: '客服系统', completed: 75, total: 100 },
  ];

  const getBarColor = (value) => {
    if (value >= 80) return '#00ff88';
    if (value >= 60) return '#00d4ff';
    if (value >= 40) return '#ffb700';
    return '#ff6b35';
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(255, 255, 255, 0.1)" 
            vertical={false}
          />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#b0b0b0', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#b0b0b0', fontSize: 12 }}
            domain={[0, 100]}
          />
          <Bar 
            dataKey="completed" 
            radius={[4, 4, 0, 0]}
            fill="#00d4ff"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.completed)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectChart;
