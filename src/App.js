import { useState } from "react";
import Sidebar from "./components/side/SIdebar"
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Calc from "./pages/Calc";
import Analytics from "./pages/Analytics";
import Checkin from "./pages/Checkin";
 import {BsToggleOn} from 'react-icons/bs'
import Subscribe from "./pages/Subscribe";
import Report from "./pages/Report";
import MonthlyPrograms from "./pages/MonthlyPrograms";
import AssignTask from "./pages/AssignTask";



function App() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };


 
  return (
    <div className="App">
      {/* <Signup /> */}
      <div className="flex">
      <BsToggleOn onClick={toggleSidebarVisibility}>Toggle Sidebar</BsToggleOn>
      {isSidebarVisible && <Sidebar />}
        {/* <Sidebar /> */}
        
        <div className="page">
          <Routes>
            <Route path="/" element={<Calc />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="checkin" element={<Checkin />} />
            <Route path="subscribe" element={<Subscribe />} />
            <Route path="report" element={<Report/>} />
            <Route path="MonthlyPrograms" element={<MonthlyPrograms />} />
            <Route path="AssignTask" element={<AssignTask />} />
          </Routes>
        </div>
      </div>
    </div>
    
  );
}

export default App;
