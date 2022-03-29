import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./pages/dashboard/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/dashboard/home/Home";
import Settings from "./pages/dashboard/settings/Settings";
import Splash from "./pages/splash/Splash";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
