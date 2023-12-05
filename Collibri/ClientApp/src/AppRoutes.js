//import LoginPage from "./components/LoginContainer";
import {Navigate} from "react-router-dom";
import {LandingPageLayout} from "./components/Layouts/LandingPageLayout";
import RoomLayout from "./components/Layouts/RoomLayout";
import AboutPage from "./components/AboutPage";



const AppRoutes = [
  {
    index: true,
    element: <Navigate to="/home"/>
  },
  {
    path: '/home',
    element: <LandingPageLayout />
  },
  {
    path: '/:roomId',
    element: <RoomLayout />
  },
  // {
  //   path: '/login',
  //   element: <LoginPage />
  //  },
  {
    path: '/about',
    element: <AboutPage />
  }
    
];

export default AppRoutes;
