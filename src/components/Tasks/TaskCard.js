import React from 'react';
import { 
  MessageCircle, 
  Paperclip, 
  AlertTriangle,
  User,
  Clock
} from 'lucide-react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'var(--error-color)';
      case 'medium':
        return 'var(--warning-color)';
      case 'low':
        return 'var(--success-color)';
      default:
        return 'var(--text-muted)';
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case 'high':
        return '高优先级';
      case 'medium':
        return '中优先级';
      case 'low':
        return '低优先级';
      default:
        return '未设置';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return '已逾期';
    } else if (diffDays === 0) {
      return '今天到期';
    } else if (diffDays === 1) {
      return '明天到期';
    } else {
      return `${diffDays}天后到期`;
    }
  };

  const isOverdue = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    return date < today;
  };

  return (
    <div className="task-card tech-card">
      <div className="task-header">
        <div className="task-priority-section">
          <div 
            className="task-priority"
            style={{ 
              color: getPriorityColor(task.priority),
              borderColor: getPriorityColor(task.priority)
            }}
          >
            <AlertTriangle size={12} />
            {task.priority}
          </div>
        </div>
      </div>

      <div className="task-content">
        <h4 className="task-title">{task.title}</h4>
        <p className="task-description">{task.description}</p>
        
        <div className="task-project">
          <span className="project-label">项目:</span>
          <span className="project-name">{task.project}</span>
        </div>
      </div>

      {task.tags && task.tags.length > 0 && (
        <div className="task-tags">
          {task.tags.map((tag, index) => (
            <span key={index} className="task-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="task-footer">
        <div className="task-assignee">
          <div className="assignee-avatar">
            <User size={14} />
          </div>
          <span className="assignee-name">{task.assignee}</span>
        </div>

        <div className="task-meta">
          <div className="task-stats">
            {task.comments > 0 && (
              <div className="stat-item">
                <MessageCircle size={14} />
                <span>{task.comments}</span>
              </div>
            )}
            {task.attachments > 0 && (
              <div className="stat-item">
                <Paperclip size={14} />
                <span>{task.attachments}</span>
              </div>
            )}
          </div>

          <div 
            className={`task-due-date ${isOverdue(task.dueDate) ? 'overdue' : ''}`}
          >
            <Clock size={12} />
            <span>{formatDate(task.dueDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
