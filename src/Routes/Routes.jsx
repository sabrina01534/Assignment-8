import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import RootLayout from "../Layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
       {
    path: "/home",
    element: <Home></Home>,
  },
   
  {
    path: "/products",
    element: <Products></Products>,
  },
    ]
  },
 
]);

export default router