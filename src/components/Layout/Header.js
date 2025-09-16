import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  Settings,
  LogOut,
  ChevronDown
} from 'lucide-react';
import './Header.css';

const Header = ({ user, onMenuClick, sidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, title: '项目A延期预警', time: '5分钟前', type: 'warning' },
    { id: 2, title: '任务已完成', time: '1小时前', type: 'success' },
    { id: 3, title: '新成员加入', time: '2小时前', type: 'info' },
  ];

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className={`menu-btn ${sidebarOpen ? 'active' : ''}`}
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </button>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="搜索项目、任务或成员..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="header-right">
        {/* 通知中心 */}
        <div className="notification-container">
          <button 
            className="notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <h3>通知中心</h3>
                <button className="mark-all-read">全部已读</button>
              </div>
              <div className="notification-list">
                {notifications.map(notification => (
                  <div key={notification.id} className={`notification-item ${notification.type}`}>
                    <div className="notification-content">
                      <div className="notification-title">{notification.title}</div>
                      <div className="notification-time">{notification.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="notification-footer">
                <button className="view-all">查看全部</button>
              </div>
            </div>
          )}
        </div>

        {/* 用户菜单 */}
        <div className="user-container">
          <button 
            className="user-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="user-avatar">
              <User size={16} />
            </div>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-role">{user.role}</div>
            </div>
            <ChevronDown size={16} className={`chevron ${showUserMenu ? 'rotate' : ''}`} />
          </button>

          {showUserMenu && (
            <div className="user-dropdown">
              <div className="user-menu-header">
                <div className="user-avatar large">
                  <User size={24} />
                </div>
                <div className="user-details">
                  <div className="user-name">{user.name}</div>
                  <div className="user-role">{user.role}</div>
                  <div className="user-email">zhang.san@company.com</div>
                </div>
              </div>
              <div className="user-menu-items">
                <button className="menu-item">
                  <User size={16} />
                  <span>个人资料</span>
                </button>
                <button className="menu-item">
                  <Settings size={16} />
                  <span>系统设置</span>
                </button>
                <div className="menu-divider"></div>
                <button className="menu-item logout">
                  <LogOut size={16} />
                  <span>退出登录</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 点击外部区域关闭下拉菜单 */}
      {(showUserMenu || showNotifications) && (
        <div 
          className="dropdown-overlay"
          onClick={() => {
            setShowUserMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
