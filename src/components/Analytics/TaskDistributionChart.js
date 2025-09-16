import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const TaskDistributionChart = () => {
  const data = [
    { name: '已完成', value: 45, color: '#00ff88' },
    { name: '进行中', value: 28, color: '#00d4ff' },
    { name: '待开始', value: 18, color: '#ffb700' },
    { name: '已暂停', value: 9, color: '#ff6b35' },
  ];

  const COLORS = ['#00ff88', '#00d4ff', '#ffb700', '#ff6b35'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div style={{
          background: 'rgba(26, 26, 46, 0.95)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '8px',
          padding: '12px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ 
            color: '#ffffff', 
            margin: '0',
            fontWeight: '600',
            fontSize: '14px'
          }}>
            {`${data.name}: ${data.value}个任务`}
          </p>
          <p style={{ 
            color: data.payload.color, 
            margin: '4px 0 0 0',
            fontSize: '12px'
          }}>
            {`占比: ${((data.value / data.payload.total) * 100).toFixed(1)}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (percent < 0.05) return null; // 不显示小于5%的标签
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight={600}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // 计算总数用于百分比计算
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithTotal = data.map(item => ({ ...item, total }));

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataWithTotal}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={CustomLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={2}
          >
            {dataWithTotal.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{
              color: '#b0b0b0',
              fontSize: '12px',
              paddingTop: '20px'
            }}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskDistributionChart;
