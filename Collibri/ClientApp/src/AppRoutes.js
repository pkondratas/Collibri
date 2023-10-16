
import { Home } from "./components/Home";
import RoomLayout from "./components/RoomLayout";
import { LandingPageLayout } from "./components/LandingPageLayout";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter/:roomId',
    element: <RoomLayout />
  },
  {
    path: '/room-page',
    element: <LandingPageLayout />
  }
];

export default AppRoutes;
