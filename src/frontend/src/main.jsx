import React from 'react'
import ReactDOM from 'react-dom/client'
import AllProjects from "./pages/AllProjects/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RankingPage from './pages/Ranking/index.jsx';
import Community from './pages/Community/Community.jsx';
import Login from './pages/login/login.jsx';
import StartPage from './pages/StartPage/StartPage.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import Profile from './pages/Profile/profile.jsx';
import AuxPage from "./pages/AuxPage/index.jsx";


const router = createBrowserRouter([
  {
    path: "/Projects",
    element: <AllProjects />,
  },
  {
    path: "/Ranking",
    element: <RankingPage />,
  },
  {
    path: "/Community",
    element: <Community />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/StartPage",
    element: <StartPage />
  },
  {
    path: "/Notifications",
    element: <Notifications />
  },
  {
    path: "/Profile",
    element: <Profile />
  },
  {
    path:"/AuxPage",
    element:<AuxPage/>
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)