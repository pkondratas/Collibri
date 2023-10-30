import { Home } from "./components/Home";
import RoomLayout from "./components/RoomLayout";
import { LandingPageLayout } from "./components/LandingPageLayout";

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
