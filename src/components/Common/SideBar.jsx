import React from "react";
import { FaCog, FaHome, FaSignOutAlt, FaUsers } from "react-icons/fa";

function SideBar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div>
      <aside
        className={`bg-white ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-56 h-screen transition-transform duration-300 p-6 flex flex-col fixed md:relative z-50 border-r border-gray-200`}
      >
        <div className="flex items-center justify-between mb-6">
          {isSidebarOpen && (
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-serif text-rose-400">DAZZLES</h1>
              <p className="text-xs text-rose-400">MYSORE | BANGALORE</p>
            </div>
          )}

          <button onClick={toggleSidebar} className="text-gray-600 md:hidden">
            ✕
          </button>
        </div>

        {isSidebarOpen && (
          <div className="flex flex-col items-center mb-6">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full mb-2"
            />
            <h2 className="font-bold text-gray-700 text-lg">Ravi Kumar</h2>
            <p className="text-sm text-gray-500">CRE</p>
            <hr className="border-gray-300 w-full my-4" />
          </div>
        )}

        {isSidebarOpen && (
          <nav className="flex-1">
            <ul className="space-y-4">
              {[
                { icon: <FaHome />, label: "Home", color: "red" },
                { icon: <FaUsers />, label: "Employees" },
                { icon: <FaCog />, label: "Settings" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 font-medium px-2 py-2 rounded-lg cursor-pointer"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {isSidebarOpen && (
          <button className="flex items-center text-red-500 font-medium mt-auto">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        )}
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

export default SideBar;
