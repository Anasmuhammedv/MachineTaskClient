
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaBars, FaBell } from "react-icons/fa";
import SideBar from "./Common/SideBar";
import { useNavigate } from "react-router-dom";

const ClientProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <main className="flex-1 p-6 md:p-10 ml-0 md:ml-64 ">
   
        <div className="flex justify-between items-center mb-6">
          <button onClick={toggleSidebar} className="text-gray-600 md:hidden">
            <FaBars size={20} />
          </button>
        </div>
          <div className="flex justify-between items-center mb-5">
            <FaArrowLeft className="text-gray-600" onClick={()=>navigate('/')}/>
            <FaBell className="text-xl text-gray-600" />
          </div>

        <h1 className="text-2xl font-bold text-gray-800">Client Profile</h1>

        <div className="bg-white shadow rounded-lg p-8 mt-6 space-y-8">
          <h2 className="text-lg font-semibold text-black mb-2">Client Details</h2>
          
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[{ label: "Name", type: "text" },
                { label: "Mobile Number", type: "text" },
                { label: "Event Date", type: "text" },
                { label: "Sample Date", type: "text" },
                { label: "Boomerang Date", type: "text" },
                { label: "Purchase Date", type: "text" },
                { label: "Team", type: "text" },
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300"
                    placeholder="input"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Type of Event
                </label>
                <select className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300">
                  <option value="">Dropdown</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Style
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300"
                  placeholder="input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Range
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300"
                  placeholder="input"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Other Details</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Barcode
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300"
                  placeholder="input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Notes
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300"
                  placeholder="input"
                />
              </div>
            </div>
           
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="px-6 py-2 bg-red-300 text-white rounded-md shadow-md w-52"
              >
                Save
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Assign To</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Team
                </label>
                <select className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300">
                  <option value="">Drop down</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Member
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 p-3 rounded-md shadow-sm focus:ring-rose-300 focus:border-rose-300"
                  placeholder="input"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-rose-300 w-52 text-white rounded-md shadow-md"
            >
              Send
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ClientProfile;
