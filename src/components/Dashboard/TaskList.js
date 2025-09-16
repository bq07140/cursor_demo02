import React from 'react';
import { Clock, User, AlertCircle, CheckCircle, Play } from 'lucide-react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} />;
      case 'in-progress':
        return <Play size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

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

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className={`task-item ${task.status}`}>
          <div className="task-status">
            {getStatusIcon(task.status)}
          </div>
          
          <div className="task-content">
            <div className="task-header">
              <h4 className="task-title">{task.title}</h4>
              <div 
                className="task-priority"
                style={{ 
                  color: getPriorityColor(task.priority),
                  borderColor: getPriorityColor(task.priority)
                }}
              >
                <AlertCircle size={12} />
                {task.priority}
              </div>
            </div>
            
            <div className="task-meta">
              <span className="task-project">{task.project}</span>
              <div className="task-assignee">
                <User size={12} />
                {task.assignee}
              </div>
              <div className="task-due">
                <Clock size={12} />
                {task.dueDate}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
