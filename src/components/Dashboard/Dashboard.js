import React from 'react';
import { 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Clock,
  AlertTriangle,
  Activity
} from 'lucide-react';
import StatsCard from './StatsCard';
import ProjectChart from './ProjectChart';
import TaskList from './TaskList';
import TeamActivity from './TeamActivity';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    {
      title: '进行中项目',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: TrendingUp,
      color: 'primary'
    },
    {
      title: '团队成员',
      value: '48',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'success'
    },
    {
      title: '已完成任务',
      value: '156',
      change: '+24',
      trend: 'up',
      icon: CheckCircle,
      color: 'info'
    },
    {
      title: '待处理预警',
      value: '3',
      change: '-1',
      trend: 'down',
      icon: AlertTriangle,
      color: 'warning'
    }
  ];

  const recentTasks = [
    {
      id: 1,
      title: '完成用户界面设计',
      project: '电商平台重构',
      assignee: '李小明',
      status: 'completed',
      dueDate: '今天',
      priority: 'high'
    },
    {
      id: 2,
      title: '数据库优化',
      project: '性能提升项目',
      assignee: '王小红',
      status: 'in-progress',
      dueDate: '明天',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'API接口开发',
      project: '移动端应用',
      assignee: '张三',
      status: 'pending',
      dueDate: '3天后',
      priority: 'high'
    },
    {
      id: 4,
      title: '用户测试反馈整理',
      project: '产品优化',
      assignee: '刘小芳',
      status: 'in-progress',
      dueDate: '1周后',
      priority: 'low'
    }
  ];

  const activities = [
    {
      id: 1,
      user: '李小明',
      action: '完成了任务',
      target: '用户界面设计',
      time: '2分钟前',
      type: 'task'
    },
    {
      id: 2,
      user: '王小红',
      action: '更新了项目进度',
      target: '性能提升项目',
      time: '15分钟前',
      type: 'project'
    },
    {
      id: 3,
      user: '张三',
      action: '创建了新任务',
      target: 'API接口开发',
      time: '1小时前',
      type: 'task'
    },
    {
      id: 4,
      user: '刘小芳',
      action: '加入了项目',
      target: '产品优化',
      time: '2小时前',
      type: 'team'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">项目管理仪表板</h1>
          <p className="dashboard-subtitle">
            欢迎回来！这里是您的项目概览和最新动态
          </p>
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-secondary">
            <Clock size={16} />
            查看报告
          </button>
          <button className="btn btn-primary">
            <TrendingUp size={16} />
            新建项目
          </button>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="dashboard-content">
        <div className="dashboard-left">
          {/* 项目进度图表 */}
          <div className="tech-card">
            <div className="card-header">
              <h3 className="card-title">
                <Activity size={20} />
                项目进度概览
              </h3>
              <div className="card-actions">
                <button className="btn-icon">
                  <TrendingUp size={16} />
                </button>
              </div>
            </div>
            <div className="card-content">
              <ProjectChart />
            </div>
          </div>

          {/* 最近任务 */}
          <div className="tech-card">
            <div className="card-header">
              <h3 className="card-title">
                <CheckCircle size={20} />
                最近任务
              </h3>
              <div className="card-actions">
                <button className="btn-text">查看全部</button>
              </div>
            </div>
            <div className="card-content">
              <TaskList tasks={recentTasks} />
            </div>
          </div>
        </div>

        <div className="dashboard-right">
          {/* 团队活动 */}
          <div className="tech-card">
            <div className="card-header">
              <h3 className="card-title">
                <Users size={20} />
                团队动态
              </h3>
            </div>
            <div className="card-content">
              <TeamActivity activities={activities} />
            </div>
          </div>

          {/* 快速操作 */}
          <div className="tech-card">
            <div className="card-header">
              <h3 className="card-title">快速操作</h3>
            </div>
            <div className="card-content">
              <div className="quick-actions">
                <button className="quick-action-btn">
                  <TrendingUp size={24} />
                  <span>新建项目</span>
                </button>
                <button className="quick-action-btn">
                  <CheckCircle size={24} />
                  <span>添加任务</span>
                </button>
                <button className="quick-action-btn">
                  <Users size={24} />
                  <span>邀请成员</span>
                </button>
                <button className="quick-action-btn">
                  <Activity size={24} />
                  <span>查看报告</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
