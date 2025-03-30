import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth";
import Home from "../pages/home";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/auth/:type" element={<AuthPage />} />
    </Routes>
  );
}