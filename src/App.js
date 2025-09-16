import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectList from './components/Projects/ProjectList';
import ProjectDetail from './components/Projects/ProjectDetail';
import TaskBoard from './components/Tasks/TaskBoard';
import Analytics from './components/Analytics/Analytics';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser] = useState({
    name: '张三',
    role: '项目经理',
    avatar: '/api/placeholder/32/32'
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <Header 
            user={currentUser} 
            onMenuClick={toggleSidebar}
            sidebarOpen={sidebarOpen}
          />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/tasks" element={<TaskBoard />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
