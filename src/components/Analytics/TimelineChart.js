import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const TimelineChart = () => {
  const data = [
    { date: '1/1', 计划任务: 20, 实际完成: 18, 累计延期: 2 },
    { date: '1/8', 计划任务: 45, 实际完成: 42, 累计延期: 5 },
    { date: '1/15', 计划任务: 68, 实际完成: 65, 累计延期: 8 },
    { date: '1/22', 计划任务: 92, 实际完成: 88, 累计延期: 12 },
    { date: '1/29', 计划任务: 115, 实际完成: 110, 累计延期: 17 },
    { date: '2/5', 计划任务: 138, 实际完成: 132, 累计延期: 23 },
    { date: '2/12', 计划任务: 160, 实际完成: 155, 累计延期: 28 },
    { date: '2/19', 计划任务: 182, 实际完成: 178, 累计延期: 32 },
    { date: '2/26', 计划任务: 205, 实际完成: 200, 累计延期: 37 },
    { date: '3/5', 计划任务: 228, 实际完成: 225, 累计延期: 40 },
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
            {`${label} 周数据`}
          </p>
          {payload.map((entry, index) => (
            <p key={index} style={{ 
              color: entry.color, 
              margin: '4px 0',
              fontSize: '14px'
            }}>
              {`${entry.dataKey}: ${entry.value}个`}
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
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorPlanned" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00d4ff" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00ff88" stopOpacity={0.05}/>
            </linearGradient>
            <linearGradient id="colorDelayed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ff6b35" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
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
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="计划任务" 
            stackId="1"
            stroke="#00d4ff" 
            strokeWidth={2}
            fill="url(#colorPlanned)"
          />
          <Area 
            type="monotone" 
            dataKey="实际完成" 
            stackId="2"
            stroke="#00ff88" 
            strokeWidth={2}
            fill="url(#colorActual)"
          />
          <Area 
            type="monotone" 
            dataKey="累计延期" 
            stackId="3"
            stroke="#ff6b35" 
            strokeWidth={2}
            fill="url(#colorDelayed)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChart;
