import { Routes, Route, Navigate } from "react-router-dom";
import Layouts from "./layouts/layouts";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layouts showHero={true}>
            <HomePage />
          </Layouts>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/user-profile"
          element={
            <Layouts>
              <UserProfilePage />
            </Layouts>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layouts>
              <ManageRestaurantPage />
            </Layouts>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
