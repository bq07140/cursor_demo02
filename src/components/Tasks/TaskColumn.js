import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import TaskCard from './TaskCard';
import './TaskColumn.css';

const TaskColumn = ({ column, tasks }) => {
  return (
    <div className="task-column">
      <div className="column-header">
        <div className="column-title-section">
          <div 
            className="column-indicator"
            style={{ backgroundColor: column.color }}
          ></div>
          <h3 className="column-title">{column.title}</h3>
          <span className="task-count">{tasks.length}</span>
        </div>
        <div className="column-actions">
          <button className="column-action-btn">
            <Plus size={16} />
          </button>
          <button className="column-action-btn">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="column-content">
        <div className="task-list">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        
        {tasks.length === 0 && (
          <div className="empty-column">
            <div className="empty-icon">
              <Plus size={32} />
            </div>
            <p className="empty-text">暂无任务</p>
            <button className="btn btn-secondary btn-sm">
              <Plus size={14} />
              添加任务
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
