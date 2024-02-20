import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import routes from "./Router";
const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <SideBar />
      <div className="p-4 mt-12 lg:ml-60 lg:ml-12">
        <NavBar />
        <div className="pt-8">
          <Routes path="dashboard">
            {routes.map(({ path, element }) => (
              <Route exact path={path} element={element} key={path} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
