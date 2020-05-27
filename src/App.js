import React from "react";
import "./static/css/dashboard.css";
import "./static/css/theme.min.css";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import Dashboard from "./components/dashboard/dashboardComponent";
import Class from "./components/class/classComponent"

function App() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div className="wrapper">
        <NavBar />
        <SideBar />
      </div>
      <div className="container">
       <Dashboard />
      
       
      </div>
    </div>
  );
}

export default App;
