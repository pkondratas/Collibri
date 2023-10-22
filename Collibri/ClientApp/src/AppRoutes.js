import { Home } from "./components/Home";
import RoomLayout from "./components/RoomLayout";
import { LandingPageLayout } from "./components/LandingPageLayout";
import LoginPage from "./components/LoginPage";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/room/:roomId',
    element: <RoomLayout />
  },
  {
    path: '/room-page',
    element: <LandingPageLayout />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
];

export default AppRoutes;
