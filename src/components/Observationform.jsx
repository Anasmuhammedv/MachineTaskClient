import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBell, FaBars } from "react-icons/fa";
import SideBar from "./Common/SideBar";
import { useNavigate } from "react-router-dom";

const ObservationForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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

      <main className="flex-1 p-6 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <button onClick={toggleSidebar} className="text-gray-600 md:hidden">
            <FaBars size={20} />
          </button>
          <FaArrowLeft onClick={()=>navigate('/')}/>
          <FaBell className="text-xl text-gray-600" />
        </div>

        <h1 className="text-2xl font-bold text-black ml-10">
          Observation Form
        </h1>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 ml-11">
            Data Check
          </h2>
          <form className="ml-20">
            <fieldset className="mb-6">
              <legend className="text-sm font-medium text-gray-500 mb-2">
                Pre-check
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
                {[
                  "Welcome",
                  "Placement",
                  "GP",
                  "Team Check",
                  "Basic HR",
                  "Music",
                  "Aroma",
                ].map((item) => (
                  <label className="flex items-center" key={item}>
                    <input
                      type="checkbox"
                      className="mr-2 border-2 border-red-300"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mb-6">
              <legend className="text-sm font-medium text-gray-500 mb-2">
                2nd Check
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  "Refreshment",
                  "Discipline",
                  "Body Language",
                  "Retirements (15th min)",
                ].map((item) => (
                  <label className="flex items-center" key={item}>
                    <input
                      type="checkbox"
                      className="mr-2 border-2 border-red-300"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mb-6">
              <legend className="text-sm font-medium text-gray-500 mb-2">
                3rd Check
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 border-2 border-red-300"
                  />
                  Upcross (50th min)
                </label>
              </div>
            </fieldset>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-6 py-2 bg-rose-300 w-52 text-white rounded-md shadow-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ObservationForm;
