import React, { useState } from 'react';
import { Plus, Filter, Search, Calendar, Users } from 'lucide-react';
import TaskColumn from './TaskColumn';
// import TaskCard from './TaskCard';
import './TaskBoard.css';

const TaskBoard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState('all');

  const columns = [
    { id: 'todo', title: '待办事项', color: 'var(--warning-color)' },
    { id: 'in-progress', title: '进行中', color: 'var(--primary-color)' },
    { id: 'review', title: '待审核', color: 'var(--secondary-color)' },
    { id: 'completed', title: '已完成', color: 'var(--success-color)' }
  ];

  const tasks = [
    {
      id: 1,
      title: '用户界面设计优化',
      description: '根据用户反馈优化主页面的交互设计',
      project: '电商平台重构',
      assignee: '李小明',
      avatar: '/api/placeholder/32/32',
      status: 'todo',
      priority: 'high',
      dueDate: '2024-03-20',
      tags: ['UI/UX', '设计'],
      comments: 3,
      attachments: 2
    },
    {
      id: 2,
      title: 'API接口开发',
      description: '开发用户管理相关的RESTful API接口',
      project: '移动端APP',
      assignee: '王小红',
      avatar: '/api/placeholder/32/32',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-03-22',
      tags: ['后端', 'API'],
      comments: 5,
      attachments: 1
    },
    {
      id: 3,
      title: '数据库性能优化',
      description: '优化查询语句，提升数据库查询性能',
      project: '数据分析系统',
      assignee: '张三',
      avatar: '/api/placeholder/32/32',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2024-03-25',
      tags: ['数据库', '性能'],
      comments: 2,
      attachments: 0
    },
    {
      id: 4,
      title: '单元测试编写',
      description: '为核心业务逻辑编写完整的单元测试',
      project: '用户管理系统',
      assignee: '刘小芳',
      avatar: '/api/placeholder/32/32',
      status: 'review',
      priority: 'medium',
      dueDate: '2024-03-18',
      tags: ['测试', '质量保证'],
      comments: 1,
      attachments: 3
    },
    {
      id: 5,
      title: '支付功能集成',
      description: '集成第三方支付接口，实现在线支付功能',
      project: '支付集成模块',
      assignee: '陈小明',
      avatar: '/api/placeholder/32/32',
      status: 'completed',
      priority: 'high',
      dueDate: '2024-03-15',
      tags: ['支付', '集成'],
      comments: 8,
      attachments: 4
    },
    {
      id: 6,
      title: '用户权限管理',
      description: '实现基于角色的用户权限管理系统',
      project: '用户管理系统',
      assignee: '吴小红',
      avatar: '/api/placeholder/32/32',
      status: 'todo',
      priority: 'medium',
      dueDate: '2024-03-28',
      tags: ['权限', '安全'],
      comments: 0,
      attachments: 1
    },
    {
      id: 7,
      title: '移动端适配',
      description: '适配移动端设备，优化触摸交互体验',
      project: '电商平台重构',
      assignee: '黄小华',
      avatar: '/api/placeholder/32/32',
      status: 'in-progress',
      priority: 'low',
      dueDate: '2024-04-01',
      tags: ['移动端', '响应式'],
      comments: 2,
      attachments: 0
    },
    {
      id: 8,
      title: '数据可视化图表',
      description: '开发交互式数据可视化图表组件',
      project: '数据分析系统',
      assignee: '李小华',
      avatar: '/api/placeholder/32/32',
      status: 'review',
      priority: 'medium',
      dueDate: '2024-03-30',
      tags: ['可视化', '图表'],
      comments: 4,
      attachments: 2
    }
  ];

  const projects = ['电商平台重构', '移动端APP', '数据分析系统', '用户管理系统', '支付集成模块'];

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProject = selectedProject === 'all' || task.project === selectedProject;
    return matchesSearch && matchesProject;
  });

  const getTasksByStatus = (status) => {
    return filteredTasks.filter(task => task.status === status);
  };

  const getStatusStats = () => {
    return columns.map(column => ({
      ...column,
      count: getTasksByStatus(column.id).length
    }));
  };

  return (
    <div className="task-board">
      <div className="task-board-header">
        <div>
          <h1 className="page-title">任务看板</h1>
          <p className="page-subtitle">
            可视化管理所有任务的进度和状态
          </p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <Calendar size={16} />
            时间线视图
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            新建任务
          </button>
        </div>
      </div>

      {/* 统计概览 */}
      <div className="board-stats">
        {getStatusStats().map(stat => (
          <div key={stat.id} className="stat-item">
            <div 
              className="stat-indicator"
              style={{ backgroundColor: stat.color }}
            ></div>
            <div className="stat-content">
              <div className="stat-count">{stat.count}</div>
              <div className="stat-label">{stat.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 工具栏 */}
      <div className="board-toolbar">
        <div className="toolbar-left">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="搜索任务..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-dropdown">
            <Filter size={16} />
            <select 
              value={selectedProject} 
              onChange={(e) => setSelectedProject(e.target.value)}
              className="filter-select"
            >
              <option value="all">全部项目</option>
              {projects.map(project => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="toolbar-right">
          <button className="btn btn-secondary">
            <Users size={16} />
            团队视图
          </button>
        </div>
      </div>

      {/* 看板列 */}
      <div className="board-columns">
        {columns.map(column => (
          <TaskColumn 
            key={column.id}
            column={column}
            tasks={getTasksByStatus(column.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
