import React from 'react';
import { User, CheckSquare, FolderOpen, UserPlus } from 'lucide-react';
import './TeamActivity.css';

const TeamActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'task':
        return <CheckSquare size={16} />;
      case 'project':
        return <FolderOpen size={16} />;
      case 'team':
        return <UserPlus size={16} />;
      default:
        return <User size={16} />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'task':
        return 'var(--success-color)';
      case 'project':
        return 'var(--primary-color)';
      case 'team':
        return 'var(--warning-color)';
      default:
        return 'var(--text-muted)';
    }
  };

  return (
    <div className="team-activity">
      {activities.map(activity => (
        <div key={activity.id} className="activity-item">
          <div 
            className="activity-icon"
            style={{ 
              backgroundColor: `${getActivityColor(activity.type)}20`,
              color: getActivityColor(activity.type)
            }}
          >
            {getActivityIcon(activity.type)}
          </div>
          
          <div className="activity-content">
            <div className="activity-text">
              <span className="activity-user">{activity.user}</span>
              <span className="activity-action">{activity.action}</span>
              <span className="activity-target">「{activity.target}」</span>
            </div>
            <div className="activity-time">{activity.time}</div>
          </div>
        </div>
      ))}
      
      <div className="activity-footer">
        <button className="view-more-btn">
          查看更多活动
        </button>
      </div>
    </div>
  );
};

export default TeamActivity;
