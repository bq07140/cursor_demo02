import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

const TeamPerformanceChart = () => {
  const data = [
    { skill: '前端开发', 团队A: 85, 团队B: 78, fullMark: 100 },
    { skill: '后端开发', 团队A: 92, 团队B: 88, fullMark: 100 },
    { skill: '数据库', 团队A: 78, 团队B: 85, fullMark: 100 },
    { skill: '测试', 团队A: 88, 团队B: 92, fullMark: 100 },
    { skill: '设计', 团队A: 75, 团队B: 70, fullMark: 100 },
    { skill: '项目管理', 团队A: 90, 团队B: 82, fullMark: 100 },
  ];

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid 
            stroke="rgba(255, 255, 255, 0.2)"
            gridType="polygon"
          />
          <PolarAngleAxis 
            dataKey="skill" 
            tick={{ fill: '#b0b0b0', fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#b0b0b0', fontSize: 10 }}
            tickCount={5}
          />
          <Radar 
            name="团队A" 
            dataKey="团队A" 
            stroke="#00d4ff" 
            fill="#00d4ff" 
            fillOpacity={0.1}
            strokeWidth={2}
            dot={{ fill: '#00d4ff', strokeWidth: 2, r: 4 }}
          />
          <Radar 
            name="团队B" 
            dataKey="团队B" 
            stroke="#00ff88" 
            fill="#00ff88" 
            fillOpacity={0.1}
            strokeWidth={2}
            dot={{ fill: '#00ff88', strokeWidth: 2, r: 4 }}
          />
          <Legend 
            wrapperStyle={{
              color: '#b0b0b0',
              fontSize: '14px',
              paddingTop: '10px'
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeamPerformanceChart;
