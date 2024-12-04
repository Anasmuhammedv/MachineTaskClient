import React, { useState } from "react";
import { FaArrowLeft, FaBars, FaBell, FaEdit } from "react-icons/fa";
import SideBar from "./Common/SideBar";
import { useNavigate } from "react-router-dom";

const ClientDetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
 const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row relative">
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <main className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <button onClick={toggleSidebar} className="text-gray-600 md:hidden">
            <FaBars size={20} />
          </button>
          <FaArrowLeft onClick={()=>navigate('/')}/>
          <FaBell className="text-xl text-gray-600" />
        </div>
          <h1 className="text-2xl font-bold text-gray-700">Client Details</h1>

        <div className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row sm:items-start">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 p-4">
            <div className="flex flex-col items-center sm:items-start">
              <img
                src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h2 className="text-lg font-bold text-gray-700">Ananya Raj</h2>
            </div>

            <div className="flex flex-row space-x-8 mt-4 sm:mt-0">
              <div className="flex flex-col items-center sm:items-start mt-20 ml-10">
                <p className="text-sm text-gray-500">Event:</p>
                <h6 className="text-base font-medium text-gray-700">
                  Marriage
                </h6>
              </div>

              <div className="flex flex-col items-center sm:items-start mt-20">
                <p className="text-sm text-gray-500">Theme:</p>
                <h6 className="text-base font-medium text-gray-700">
                  Rajasthani
                </h6>
              </div>
            </div>
          </div>

          <button className="flex items-center border border-red-300 bg-white text-red-300 px-4 py-2 rounded-lg mt-4 sm:mt-0 sm:ml-auto">
            <FaEdit className="mr-2" />
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <button className="flex justify-between items-center bg-white shadow rounded-lg p-4 hover:bg-gray-100 " onClick={()=>navigate('/clientProfile')}>
            <span className="text-gray-700 font-medium">Client Profile</span>
            <p className="text-red-300 underline">Open</p>
          </button>
          <button className="flex justify-between items-center bg-white shadow rounded-lg p-4 hover:bg-gray-100" onClick={()=>navigate('/clientObservation')}>
            <span className="text-gray-700 font-medium">Client Observation</span>
            <p className="text-red-300 underline">Open</p>
          </button>
          <button className="flex justify-between items-center bg-white shadow rounded-lg p-4 hover:bg-gray-100">
            <span className="text-gray-700 font-medium">QSS Form</span>
            <p className="text-red-300 underline">Open</p>
          </button>
          <button className="flex justify-between items-center bg-white shadow rounded-lg p-4 hover:bg-gray-100">
            <span className="text-gray-700 font-medium">Upcross Form</span>
            <p className="text-red-300 underline">Open</p>
          </button>
          <button className="flex justify-between items-center bg-white shadow rounded-lg p-4 hover:bg-gray-100">
            <span className="text-gray-700 font-medium">Attention Form</span>
            <p className="text-red-300 underline">Open</p>
          </button>
          <button className="flex justify-between items-center bg-white shadow rounded-lg p-4 hover:bg-gray-100">
            <span className="text-gray-700 font-medium">Billing Details</span>
            <p className="text-red-300 underline">Open</p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ClientDetails;
