import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FolderOpen, 
  CheckSquare, 
  BarChart3, 
  Settings, 
  Users,
  Bell,
  X
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: '仪表板', badge: null },
    { path: '/projects', icon: FolderOpen, label: '项目管理', badge: '12' },
    { path: '/tasks', icon: CheckSquare, label: '任务看板', badge: '28' },
    { path: '/analytics', icon: BarChart3, label: '数据分析', badge: null },
    { path: '/team', icon: Users, label: '团队管理', badge: null },
    { path: '/notifications', icon: Bell, label: '通知中心', badge: '3' },
    { path: '/settings', icon: Settings, label: '系统设置', badge: null },
  ];

  return (
    <>
      {/* 移动端遮罩 */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-pulse"></div>
              PM
            </div>
            <span className="logo-text">Project Manager</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => window.innerWidth <= 768 && onClose()}
                  >
                    <div className="nav-icon">
                      <Icon size={20} />
                    </div>
                    <span className="nav-label">{item.label}</span>
                    {item.badge && (
                      <span className="nav-badge">{item.badge}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="system-status">
            <div className="status-indicator online"></div>
            <div className="status-text">
              <div className="status-label">系统状态</div>
              <div className="status-value">正常运行</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
