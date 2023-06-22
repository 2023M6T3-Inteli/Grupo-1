import React from 'react'
import ReactDOM from 'react-dom/client'
import AllProjects from "./pages/AllProjects/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RankingPage from './pages/Ranking/index.jsx';
import Community from './pages/Community/Community.jsx';
import Login from './pages/login/login.jsx';
import StartPage from './pages/StartPage/StartPage.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import FaqPage from './pages/Faq';
import Profile from './pages/Profile/profile.jsx';
import SavedPosts from './pages/SavedPosts/SavedPosts';
import SavedProjects from './pages/SavedProjects/SavedProjects';
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
    element: <Community />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/Notifications",
    element: <Notifications />,
  },
  {
    path: "/Faq",
    element: <FaqPage/>,
  },

  {
    path: "/Profile",
    element: <Profile />
  },

  {
    path: "/SavedPosts",
    element: <SavedPosts />
  },

  // {
  //   path: "/SavedProjects",
  //   element: <SavedProjects />
  // },
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

