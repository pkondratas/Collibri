
import { Home } from "./components/Home";
import {TestPage} from "./components/testPage";
import RoomLayout from "./components/RoomLayout";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter/:roomId',
    element: <RoomLayout />
  },
  
];

export default AppRoutes;
