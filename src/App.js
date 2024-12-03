import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Route for Task Dashboard with Sidebar and Content */}
        <Route
          path="/tasks"
          element={
            <div className="flex min-h-screen bg-gray-900">
              <Sidebar
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                setIsModalOpen={setIsModalOpen}
              />
              <div className="flex-1">
                <Content
                  selectedOption={selectedOption}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
