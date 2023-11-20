import LoginPage from "./components/LoginPage";
import {Navigate} from "react-router-dom";
import {LandingPageLayout} from "./components/Layouts/LandingPageLayout";
import RoomLayout from "./components/Layouts/RoomLayout";

const AppRoutes = [
  {
    index: true,
    element: <Navigate to="/login"/>
  },
  {
    path: '/home',
    element: <LandingPageLayout />
  },
  {
    path: '/:roomId',
    element: <RoomLayout />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
];

export default AppRoutes;
