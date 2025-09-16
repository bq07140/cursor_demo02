import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Play,
  Pause,
  MoreHorizontal
} from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, viewMode }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} />;
      case 'in-progress':
        return <Play size={16} />;
      case 'paused':
        return <Pause size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'var(--success-color)';
      case 'in-progress':
        return 'var(--primary-color)';
      case 'paused':
        return 'var(--text-muted)';
      case 'planning':
        return 'var(--warning-color)';
      default:
        return 'var(--text-muted)';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'in-progress':
        return '进行中';
      case 'paused':
        return '已暂停';
      case 'planning':
        return '计划中';
      default:
        return '未知';
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric'
    });
  };

  if (viewMode === 'list') {
    return (
      <div className="project-card list-view tech-card">
        <div className="project-main">
          <div className="project-header">
            <div className="project-info">
              <Link to={`/projects/${project.id}`} className="project-title">
                {project.name}
              </Link>
              <div className="project-meta">
                <span className="project-department">{project.department}</span>
                <div 
                  className="project-status"
                  style={{ color: getStatusColor(project.status) }}
                >
                  {getStatusIcon(project.status)}
                  {getStatusText(project.status)}
                </div>
              </div>
            </div>
            <div className="project-actions">
              <button className="action-btn">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
          
          <div className="project-progress-section">
            <div className="progress-info">
              <span className="progress-text">{project.progress}% 完成</span>
              <span className="task-count">{project.tasks.completed}/{project.tasks.total} 任务</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="project-sidebar">
          <div className="project-manager">
            <Users size={14} />
            <span>{project.manager}</span>
          </div>
          <div className="project-dates">
            <Calendar size={14} />
            <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
          </div>
          <div 
            className="project-priority"
            style={{ 
              color: getPriorityColor(project.priority),
              borderColor: getPriorityColor(project.priority)
            }}
          >
            <AlertTriangle size={12} />
            {project.priority}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card grid-view tech-card">
      <div className="project-header">
        <div className="project-title-section">
          <Link to={`/projects/${project.id}`} className="project-title">
            {project.name}
          </Link>
          <div 
            className="project-priority"
            style={{ 
              color: getPriorityColor(project.priority),
              borderColor: getPriorityColor(project.priority)
            }}
          >
            <AlertTriangle size={12} />
            {project.priority}
          </div>
        </div>
        <button className="action-btn">
          <MoreHorizontal size={16} />
        </button>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-meta-grid">
        <div className="meta-item">
          <span className="meta-label">部门</span>
          <span className="meta-value">{project.department}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">负责人</span>
          <span className="meta-value">{project.manager}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">团队成员</span>
          <span className="meta-value">{project.members.length}人</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">任务进度</span>
          <span className="meta-value">{project.tasks.completed}/{project.tasks.total}</span>
        </div>
      </div>

      <div className="project-progress-section">
        <div className="progress-header">
          <span className="progress-text">完成进度</span>
          <span className="progress-percentage">{project.progress}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="project-footer">
        <div 
          className="project-status"
          style={{ 
            color: getStatusColor(project.status),
            backgroundColor: `${getStatusColor(project.status)}20`
          }}
        >
          {getStatusIcon(project.status)}
          {getStatusText(project.status)}
        </div>
        <div className="project-dates">
          <Calendar size={14} />
          <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
