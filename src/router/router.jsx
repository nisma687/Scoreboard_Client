import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashBoard from "../pages/DashBoard/DashBoard";

import CricketerDashBoard from "../components/Cricketer/CricketerDashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path: "/",
            element: <Home />,
        },
        {
            path:"/login",
            element:<Login/>,
        },
        {
            path:"/register",
            element:<Register/>,
        },
        {
          path:"/dashboard",
          element:<DashBoard/>,
        },
        {
          path:"/cricketer",
          element:<CricketerDashBoard/>,
        }
      ]
    },
  ]);

export default router;