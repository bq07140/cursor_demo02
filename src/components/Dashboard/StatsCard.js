import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatsCard.css';

const StatsCard = ({ title, value, change, trend, icon: Icon, color }) => {
  return (
    <div className={`stats-card tech-card ${color}`}>
      <div className="stats-icon">
        <Icon size={24} />
      </div>
      
      <div className="stats-content">
        <div className="stats-header">
          <h3 className="stats-title">{title}</h3>
          <div className={`stats-trend ${trend}`}>
            {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="trend-value">{change}</span>
          </div>
        </div>
        
        <div className="stats-value">{value}</div>
        
        <div className="stats-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(parseInt(value) * 2, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="stats-glow"></div>
    </div>
  );
};

export default StatsCard;
