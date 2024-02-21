import React from "react";
import Login from "./pages/user/Login";
import { Flex } from "@chakra-ui/react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AdLogin from "./pages/admin/AdLogin";
import Register from "./pages/user/Register";
import User from "./pages/admin/User";
import CdPost from "./pages/admin/CdPost";
import Settings from "./pages/admin/Settings";
import Logout from "./pages/admin/Logout";
import Dashboard from "./pages/user/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/Adlogin" element={<AdLogin />} />
      <Route path="/User" element={<User />} />
      <Route path="/content" element={<CdPost />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Logout" element={<Logout />} />
    </Routes>
  );
};

export default App;
