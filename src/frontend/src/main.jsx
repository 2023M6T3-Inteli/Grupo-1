import React from 'react'
import ReactDOM from 'react-dom/client'
import RankingPage from './pages/Ranking/index.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from './pages/Community/Community.jsx';
import Login from './pages/login/login.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';


const router = createBrowserRouter([
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
    path: "/Notifications",
    element: <Notifications />
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)