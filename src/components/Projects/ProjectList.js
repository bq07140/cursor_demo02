import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid, 
  List,
  Calendar,
  Users,
  Clock,
  TrendingUp
} from 'lucide-react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 1,
      name: '电商平台重构',
      description: '基于React和Node.js的现代化电商平台开发',
      department: '技术部',
      status: 'in-progress',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      manager: '张三',
      members: ['李四', '王五', '赵六'],
      tasks: { total: 45, completed: 34 },
      priority: 'high'
    },
    {
      id: 2,
      name: '移动端APP开发',
      description: '跨平台移动应用开发，支持iOS和Android',
      department: '产品部',
      status: 'planning',
      progress: 25,
      startDate: '2024-03-01',
      endDate: '2024-09-15',
      manager: '李小明',
      members: ['王小红', '刘小芳'],
      tasks: { total: 28, completed: 7 },
      priority: 'medium'
    },
    {
      id: 3,
      name: '数据分析系统',
      description: '企业级数据分析和可视化平台',
      department: '数据部',
      status: 'completed',
      progress: 100,
      startDate: '2023-10-01',
      endDate: '2024-02-28',
      manager: '王小红',
      members: ['张小明', '李小华', '赵小强'],
      tasks: { total: 52, completed: 52 },
      priority: 'high'
    },
    {
      id: 4,
      name: '用户管理系统',
      description: '统一用户认证和权限管理系统',
      department: '技术部',
      status: 'in-progress',
      progress: 60,
      startDate: '2024-02-15',
      endDate: '2024-07-30',
      manager: '刘小芳',
      members: ['陈小明', '吴小红'],
      tasks: { total: 32, completed: 19 },
      priority: 'medium'
    },
    {
      id: 5,
      name: '客服聊天系统',
      description: '实时客服聊天和工单管理系统',
      department: '客服部',
      status: 'paused',
      progress: 40,
      startDate: '2024-01-01',
      endDate: '2024-05-31',
      manager: '陈小明',
      members: ['黄小华'],
      tasks: { total: 24, completed: 10 },
      priority: 'low'
    },
    {
      id: 6,
      name: '支付集成模块',
      description: '多渠道支付接口集成和管理',
      department: '财务部',
      status: 'in-progress',
      progress: 85,
      startDate: '2023-12-01',
      endDate: '2024-04-30',
      manager: '吴小红',
      members: ['李小强', '张小华', '王小明'],
      tasks: { total: 18, completed: 15 },
      priority: 'high'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusCount = (status) => {
    return projects.filter(p => p.status === status).length;
  };

  return (
    <div className="project-list">
      <div className="project-list-header">
        <div>
          <h1 className="page-title">项目管理</h1>
          <p className="page-subtitle">
            管理和跟踪所有项目的进度和状态
          </p>
        </div>
        <div className="header-actions">
          <Link to="/projects/new" className="btn btn-primary">
            <Plus size={16} />
            新建项目
          </Link>
        </div>
      </div>

      {/* 统计概览 */}
      <div className="project-stats">
        <div className="stat-item">
          <div className="stat-icon primary">
            <TrendingUp size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{projects.length}</div>
            <div className="stat-label">总项目数</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon success">
            <Clock size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{getStatusCount('in-progress')}</div>
            <div className="stat-label">进行中</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon warning">
            <Calendar size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{getStatusCount('planning')}</div>
            <div className="stat-label">计划中</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon info">
            <Users size={20} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{getStatusCount('completed')}</div>
            <div className="stat-label">已完成</div>
          </div>
        </div>
      </div>

      {/* 工具栏 */}
      <div className="project-toolbar">
        <div className="toolbar-left">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="搜索项目..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-dropdown">
            <Filter size={16} />
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">全部状态</option>
              <option value="planning">计划中</option>
              <option value="in-progress">进行中</option>
              <option value="completed">已完成</option>
              <option value="paused">已暂停</option>
            </select>
          </div>
        </div>

        <div className="toolbar-right">
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 项目列表 */}
      <div className={`projects-container ${viewMode}`}>
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            viewMode={viewMode}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">
            <TrendingUp size={48} />
          </div>
          <h3>没有找到匹配的项目</h3>
          <p>尝试调整搜索条件或创建新项目</p>
          <Link to="/projects/new" className="btn btn-primary">
            <Plus size={16} />
            创建新项目
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
