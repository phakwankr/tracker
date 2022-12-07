import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import UserDash from "./components/UserDash";
import Detail from "./components/Detail";
import Add from "./components/Add";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myDashboard" element={<UserDash />} />
        <Route path="/myDashboard/:id" element={<Detail />} />
        <Route path="/dashboard/add" element={<Add />} />
      </Routes>
    </main>
  </React.Fragment>
};
export default App
