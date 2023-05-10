import React from 'react'
import ReactDOM from 'react-dom/client'
import RankingPage from '../pages/Ranking/index.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/Ranking",
    element: <RankingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
