import RoomLayout from "./components/RoomLayout";
import { LandingPageLayout } from "./components/LandingPageLayout";
import LoginPage from "./components/LoginPage";

const AppRoutes = [
  {
    index: true,
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
