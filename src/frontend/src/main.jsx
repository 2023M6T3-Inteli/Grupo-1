import React from 'react'
import ReactDOM from 'react-dom/client'
import RankingPage from './pages/Ranking/index.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from './pages/Community/Community.jsx';
import Login from './pages/Login/login.jsx';
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
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)