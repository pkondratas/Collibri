import RoomLayout from "./components/RoomLayout";
import { LandingPageLayout } from "./components/LandingPageLayout";
import LoginPage from "./components/LoginPage";
import {Navigate} from "react-router-dom";

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
