import { Routes, Route, Navigate } from "react-router-dom";
import Layouts from "./layouts/layouts";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layouts>
            <HomePage />
          </Layouts>
        }
      />
      <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
