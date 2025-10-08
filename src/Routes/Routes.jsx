import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Application from "../Pages/Application";
import TrendingApp from "../Pages/TrendingApp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
       {
    index:true,
    element: <Home></Home>,
  },
   
  {
    path: "/application",
    element: <Application></Application>,
  },
  {
    path: "/trendingapp",
    element: <TrendingApp></TrendingApp>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
    ]
  },
 
]);

export default router