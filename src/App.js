import Header from "./components/Header";
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";
import Detail from "./components/Profile";
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
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/add" element={<Add />} />
        <Route path="/myDashboard" element={<UserDashboard />} />
        <Route path="/myDashboard/:id" element={<Detail />} />
      </Routes>
    </main>
  </React.Fragment>
};
export default App
