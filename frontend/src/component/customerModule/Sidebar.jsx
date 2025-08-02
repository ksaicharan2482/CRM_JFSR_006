import React from 'react';
import '../../index.css';

const Sidebar = () => {
  return (
    <div className="w-1/6 h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="font-bold text-gray-800 text-2xl my-40">CRM</h2>
      <ul className="space-y-3 w-full">
        <li className="sidebar-item">Dashboard</li>
        <li className="sidebar-item">Customers</li>
        <li className="sidebar-item">Sales Opportunities</li>
        <li className="sidebar-item">Support Tickets</li>
        <li className="sidebar-item">Campaigns</li>
      </ul>
    </div>
  );
};

export default Sidebar;
