import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const ProjectProgressChart = () => {
  const data = [
    { date: '1月', 电商平台: 20, 移动应用: 15, 数据分析: 25, 用户系统: 30 },
    { date: '2月', 电商平台: 35, 移动应用: 28, 数据分析: 45, 用户系统: 50 },
    { date: '3月', 电商平台: 50, 移动应用: 42, 数据分析: 65, 用户系统: 70 },
    { date: '4月', 电商平台: 65, 移动应用: 55, 数据分析: 80, 用户系统: 85 },
    { date: '5月', 电商平台: 75, 移动应用: 68, 数据分析: 95, 用户系统: 95 },
    { date: '6月', 电商平台: 85, 移动应用: 78, 数据分析: 100, 用户系统: 100 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'rgba(26, 26, 46, 0.95)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '8px',
          padding: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ color: '#ffffff', margin: '0 0 8px 0', fontWeight: '600' }}>
            {`${label}月进度`}
          </p>
          {payload.map((entry, index) => (
            <p key={index} style={{ 
              color: entry.color, 
              margin: '4px 0',
              fontSize: '14px'
            }}>
              {`${entry.dataKey}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(255, 255, 255, 0.1)" 
            vertical={false}
          />
          <XAxis 
            dataKey="date" 
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
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="电商平台" 
            stroke="#00d4ff" 
            strokeWidth={3}
            dot={{ fill: '#00d4ff', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#00d4ff', strokeWidth: 2, fill: '#ffffff' }}
          />
          <Line 
            type="monotone" 
            dataKey="移动应用" 
            stroke="#00ff88" 
            strokeWidth={3}
            dot={{ fill: '#00ff88', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#00ff88', strokeWidth: 2, fill: '#ffffff' }}
          />
          <Line 
            type="monotone" 
            dataKey="数据分析" 
            stroke="#ffb700" 
            strokeWidth={3}
            dot={{ fill: '#ffb700', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#ffb700', strokeWidth: 2, fill: '#ffffff' }}
          />
          <Line 
            type="monotone" 
            dataKey="用户系统" 
            stroke="#ff6b35" 
            strokeWidth={3}
            dot={{ fill: '#ff6b35', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#ff6b35', strokeWidth: 2, fill: '#ffffff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectProgressChart;
