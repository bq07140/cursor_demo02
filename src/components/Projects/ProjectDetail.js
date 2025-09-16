import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Users,
  Target,
  Plus,
  Edit,
  Settings,
  FileText,
  MessageSquare,
  Paperclip
} from 'lucide-react';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // 模拟项目数据
  const project = {
    id: 1,
    name: '电商平台重构',
    description: '基于React和Node.js的现代化电商平台开发，包含用户管理、商品管理、订单处理、支付集成等核心功能模块。',
    department: '技术部',
    status: 'in-progress',
    progress: 75,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    manager: '张三',
    members: [
      { id: 1, name: '李四', role: '前端开发', avatar: '/api/placeholder/32/32' },
      { id: 2, name: '王五', role: '后端开发', avatar: '/api/placeholder/32/32' },
      { id: 3, name: '赵六', role: 'UI设计师', avatar: '/api/placeholder/32/32' },
      { id: 4, name: '刘七', role: '测试工程师', avatar: '/api/placeholder/32/32' }
    ],
    tasks: { total: 45, completed: 34, inProgress: 8, pending: 3 },
    priority: 'high',
    milestones: [
      { id: 1, name: '需求分析完成', date: '2024-02-01', status: 'completed' },
      { id: 2, name: '原型设计完成', date: '2024-02-15', status: 'completed' },
      { id: 3, name: '前端开发完成', date: '2024-04-30', status: 'in-progress' },
      { id: 4, name: '后端开发完成', date: '2024-05-15', status: 'pending' },
      { id: 5, name: '系统测试完成', date: '2024-06-15', status: 'pending' },
      { id: 6, name: '项目上线', date: '2024-06-30', status: 'pending' }
    ],
    recentActivities: [
      { id: 1, user: '李四', action: '完成了任务', target: '用户登录页面开发', time: '2小时前' },
      { id: 2, user: '王五', action: '更新了', target: 'API接口文档', time: '4小时前' },
      { id: 3, user: '赵六', action: '上传了', target: '界面设计稿', time: '6小时前' },
      { id: 4, user: '张三', action: '创建了里程碑', target: '前端开发完成', time: '1天前' }
    ]
  };

  const tabs = [
    { id: 'overview', label: '项目概览', icon: Target },
    { id: 'tasks', label: '任务管理', icon: FileText },
    { id: 'team', label: '团队成员', icon: Users },
    { id: 'files', label: '项目文件', icon: Paperclip },
    { id: 'discussions', label: '讨论区', icon: MessageSquare }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'var(--success-color)';
      case 'in-progress':
        return 'var(--primary-color)';
      case 'pending':
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
      case 'pending':
        return '待开始';
      default:
        return '未知';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderOverview = () => (
    <div className="overview-content">
      <div className="overview-grid">
        <div className="project-info-card tech-card">
          <h3 className="card-title">项目信息</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">项目状态</span>
              <div 
                className="status-badge"
                style={{ 
                  color: getStatusColor(project.status),
                  backgroundColor: `${getStatusColor(project.status)}20`,
                  borderColor: getStatusColor(project.status)
                }}
              >
                {getStatusText(project.status)}
              </div>
            </div>
            <div className="info-item">
              <span className="info-label">项目经理</span>
              <span className="info-value">{project.manager}</span>
            </div>
            <div className="info-item">
              <span className="info-label">所属部门</span>
              <span className="info-value">{project.department}</span>
            </div>
            <div className="info-item">
              <span className="info-label">团队规模</span>
              <span className="info-value">{project.members.length} 人</span>
            </div>
            <div className="info-item">
              <span className="info-label">开始时间</span>
              <span className="info-value">{formatDate(project.startDate)}</span>
            </div>
            <div className="info-item">
              <span className="info-label">预计完成</span>
              <span className="info-value">{formatDate(project.endDate)}</span>
            </div>
          </div>
        </div>

        <div className="progress-card tech-card">
          <h3 className="card-title">进度统计</h3>
          <div className="progress-stats">
            <div className="progress-circle">
              <div className="circle-progress" style={{ '--progress': `${project.progress}%` }}>
                <span className="progress-value">{project.progress}%</span>
              </div>
            </div>
            <div className="progress-details">
              <div className="progress-item">
                <span className="progress-label">已完成</span>
                <span className="progress-count" style={{ color: 'var(--success-color)' }}>
                  {project.tasks.completed}
                </span>
              </div>
              <div className="progress-item">
                <span className="progress-label">进行中</span>
                <span className="progress-count" style={{ color: 'var(--primary-color)' }}>
                  {project.tasks.inProgress}
                </span>
              </div>
              <div className="progress-item">
                <span className="progress-label">待开始</span>
                <span className="progress-count" style={{ color: 'var(--warning-color)' }}>
                  {project.tasks.pending}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-bottom">
        <div className="milestones-card tech-card">
          <div className="card-header">
            <h3 className="card-title">项目里程碑</h3>
            <button className="btn btn-secondary btn-sm">
              <Plus size={14} />
              添加里程碑
            </button>
          </div>
          <div className="milestones-list">
            {project.milestones.map(milestone => (
              <div key={milestone.id} className="milestone-item">
                <div 
                  className="milestone-indicator"
                  style={{ backgroundColor: getStatusColor(milestone.status) }}
                ></div>
                <div className="milestone-content">
                  <div className="milestone-name">{milestone.name}</div>
                  <div className="milestone-date">{formatDate(milestone.date)}</div>
                </div>
                <div 
                  className="milestone-status"
                  style={{ color: getStatusColor(milestone.status) }}
                >
                  {getStatusText(milestone.status)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="activities-card tech-card">
          <div className="card-header">
            <h3 className="card-title">最近活动</h3>
            <button className="btn-text">查看全部</button>
          </div>
          <div className="activities-list">
            {project.recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-avatar">
                  <Users size={16} />
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
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <div className="header-left">
          <Link to="/projects" className="back-btn">
            <ArrowLeft size={16} />
            返回项目列表
          </Link>
          <div className="project-title-section">
            <h1 className="project-title">{project.name}</h1>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <Edit size={16} />
            编辑项目
          </button>
          <button className="btn btn-secondary">
            <Settings size={16} />
            项目设置
          </button>
        </div>
      </div>

      <div className="project-tabs">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="project-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'tasks' && (
          <div className="tab-content">
            <h3>任务管理功能开发中...</h3>
          </div>
        )}
        {activeTab === 'team' && (
          <div className="tab-content">
            <h3>团队成员管理功能开发中...</h3>
          </div>
        )}
        {activeTab === 'files' && (
          <div className="tab-content">
            <h3>文件管理功能开发中...</h3>
          </div>
        )}
        {activeTab === 'discussions' && (
          <div className="tab-content">
            <h3>讨论区功能开发中...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
