import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Application from "../Pages/Application";
import TrendingApp from "../Pages/TrendingApp";
import AppDetails from "../Components/AppDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    hydrateFallbackElement:<p>Loading....</p>,
     errorElement:<ErrorPage></ErrorPage>,
    children:[
       {
    index:true,
    element: <Home></Home>,
    
    loader:()=>fetch('./Data.json'),
  },
   
  {
    path: "/application",
    loader:()=>fetch('./Data.json'),
    element: <Application></Application>,
  },
  {
    path: "/trendingapp",
    // loader:()=>fetch('./Data.json'),
    hydrateFallbackElement:<p>Loading....</p>,
    element: <TrendingApp></TrendingApp>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path:'/apps/:id',
    element:<AppDetails></AppDetails>
  }
    ]
  },
 
]);

export default router