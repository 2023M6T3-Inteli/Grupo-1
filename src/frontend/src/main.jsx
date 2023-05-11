import React from 'react'
import ReactDOM from 'react-dom/client'
import AllProjects from "./pages/AllProjects/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path:"/projects",
    element:<AllProjects/>,
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)