import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-64 bg-gray-800 h-screen text-white">
      <div className="p-4 font-bold text-lg">Vuexy</div>
      <ul className="space-y-2">
        {/* Dashboards Section */}
        <li>
          <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <span>Dashboards</span>
            <span className="bg-red-500 text-sm px-2 py-1 rounded-full">5</span>
          </div>
        </li>

        {/* Analytics Section */}
        <li>
          <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            Analytics
          </div>
        </li>

        {/* Dropdown Sections */}
        {["CRM", "eCommerce", "Logistics", "Academy"].map((item, index) => (
          <li key={index}>
            <div
              onClick={() => toggleDropdown(index)}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex justify-between"
            >
              <span>{item}</span>
            </div>
          </li>
        ))}

        {/* Layouts Dropdown */}
        <li>
          <div
            onClick={() => toggleDropdown("layouts")}
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            <span>Layouts</span>
            <span className="transform rotate-90">
              {isOpen === "layouts" ? "▼" : "►"}
            </span>
          </div>
          {isOpen === "layouts" && (
            <ul className="ml-8 space-y-2">
              <li className="hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">
                Front Pages
              </li>
            </ul>
          )}
        </li>

        {/* Apps & Pages Section */}
        <li className="px-4 py-2 text-gray-400 uppercase text-xs">
          Apps & Pages
        </li>
        {[
          "Email",
          "Chat",
          "Calendar",
          "Kanban",
          "eCommerce",
          "Academy",
          "Logistics",
        ].map((item, index) => (
          <li
            key={index}
            className="hover:bg-gray-700 px-4 py-2 rounded cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
