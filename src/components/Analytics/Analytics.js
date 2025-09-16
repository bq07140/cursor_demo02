import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';
import ProjectProgressChart from './ProjectProgressChart';
import TeamPerformanceChart from './TeamPerformanceChart';
import TaskDistributionChart from './TaskDistributionChart';
import TimelineChart from './TimelineChart';
import './Analytics.css';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedProject, setSelectedProject] = useState('all');

  const kpiData = [
    {
      title: '项目完成率',
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: Target,
      color: 'success'
    },
    {
      title: '平均项目周期',
      value: '45天',
      change: '-3天',
      trend: 'down',
      icon: Clock,
      color: 'primary'
    },
    {
      title: '团队效率',
      value: '92%',
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'warning'
    },
    {
      title: '资源利用率',
      value: '78%',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'info'
    }
  ];

  const projects = [
    '电商平台重构',
    '移动端APP',
    '数据分析系统',
    '用户管理系统',
    '支付集成模块'
  ];

  return (
    <div className="analytics">
      <div className="analytics-header">
        <div>
          <h1 className="page-title">数据分析</h1>
          <p className="page-subtitle">
            深入了解项目进度和团队绩效数据
          </p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <RefreshCw size={16} />
            刷新数据
          </button>
          <button className="btn btn-primary">
            <Download size={16} />
            导出报告
          </button>
        </div>
      </div>

      {/* 控制面板 */}
      <div className="analytics-controls">
        <div className="control-group">
          <label className="control-label">时间范围</label>
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="control-select"
          >
            <option value="7d">最近7天</option>
            <option value="30d">最近30天</option>
            <option value="90d">最近3个月</option>
            <option value="1y">最近1年</option>
          </select>
        </div>
        
        <div className="control-group">
          <label className="control-label">项目筛选</label>
          <select 
            value={selectedProject} 
            onChange={(e) => setSelectedProject(e.target.value)}
            className="control-select"
          >
            <option value="all">全部项目</option>
            {projects.map(project => (
              <option key={project} value={project}>{project}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <button className="btn btn-secondary">
            <Filter size={16} />
            高级筛选
          </button>
        </div>
      </div>

      {/* KPI 卡片 */}
      <div className="kpi-grid">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className={`kpi-card tech-card ${kpi.color}`}>
              <div className="kpi-icon">
                <Icon size={24} />
              </div>
              <div className="kpi-content">
                <div className="kpi-header">
                  <h3 className="kpi-title">{kpi.title}</h3>
                  <div className={`kpi-trend ${kpi.trend}`}>
                    <TrendingUp size={16} />
                    <span>{kpi.change}</span>
                  </div>
                </div>
                <div className="kpi-value">{kpi.value}</div>
                <div className="kpi-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: kpi.value }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 图表区域 */}
      <div className="charts-grid">
        {/* 项目进度分析 */}
        <div className="chart-card tech-card">
          <div className="card-header">
            <h3 className="card-title">
              <TrendingUp size={20} />
              项目进度分析
            </h3>
            <div className="card-actions">
              <button className="btn-icon">
                <Calendar size={16} />
              </button>
            </div>
          </div>
          <div className="card-content">
            <ProjectProgressChart />
          </div>
        </div>

        {/* 团队绩效 */}
        <div className="chart-card tech-card">
          <div className="card-header">
            <h3 className="card-title">
              <Users size={20} />
              团队绩效分析
            </h3>
            <div className="card-actions">
              <button className="btn-icon">
                <Download size={16} />
              </button>
            </div>
          </div>
          <div className="card-content">
            <TeamPerformanceChart />
          </div>
        </div>

        {/* 任务分布 */}
        <div className="chart-card tech-card">
          <div className="card-header">
            <h3 className="card-title">
              <Target size={20} />
              任务状态分布
            </h3>
          </div>
          <div className="card-content">
            <TaskDistributionChart />
          </div>
        </div>

        {/* 时间线分析 */}
        <div className="chart-card tech-card full-width">
          <div className="card-header">
            <h3 className="card-title">
              <Clock size={20} />
              项目时间线分析
            </h3>
            <div className="card-actions">
              <button className="btn-text">查看详情</button>
            </div>
          </div>
          <div className="card-content">
            <TimelineChart />
          </div>
        </div>
      </div>

      {/* 洞察和建议 */}
      <div className="insights-section">
        <div className="insights-card tech-card">
          <div className="card-header">
            <h3 className="card-title">数据洞察</h3>
          </div>
          <div className="card-content">
            <div className="insights-list">
              <div className="insight-item success">
                <div className="insight-icon">
                  <TrendingUp size={16} />
                </div>
                <div className="insight-content">
                  <h4>项目进展良好</h4>
                  <p>本月项目完成率较上月提升5%，团队执行力有显著改善</p>
                </div>
              </div>
              <div className="insight-item warning">
                <div className="insight-icon">
                  <Clock size={16} />
                </div>
                <div className="insight-content">
                  <h4>注意资源分配</h4>
                  <p>移动端APP项目进度略有延迟，建议增加人力资源投入</p>
                </div>
              </div>
              <div className="insight-item info">
                <div className="insight-icon">
                  <Users size={16} />
                </div>
                <div className="insight-content">
                  <h4>团队协作优化</h4>
                  <p>跨部门协作效率提升12%，建议推广最佳实践经验</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="recommendations-card tech-card">
          <div className="card-header">
            <h3 className="card-title">优化建议</h3>
          </div>
          <div className="card-content">
            <div className="recommendations-list">
              <div className="recommendation-item">
                <div className="recommendation-priority high">高</div>
                <div className="recommendation-content">
                  <h4>优化任务分配算法</h4>
                  <p>基于团队成员技能和工作负荷，智能推荐最优任务分配方案</p>
                </div>
              </div>
              <div className="recommendation-item">
                <div className="recommendation-priority medium">中</div>
                <div className="recommendation-content">
                  <h4>加强进度监控</h4>
                  <p>设置更细粒度的里程碑，提高项目进度可视化程度</p>
                </div>
              </div>
              <div className="recommendation-item">
                <div className="recommendation-priority low">低</div>
                <div className="recommendation-content">
                  <h4>改善沟通流程</h4>
                  <p>建立标准化的项目沟通模板，提高信息传递效率</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
