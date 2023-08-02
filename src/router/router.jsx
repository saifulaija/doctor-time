import { createBrowserRouter } from "react-router-dom";



import Home from "../page/Home";
import Layout from "../layout/Layout";

export  const router = createBrowserRouter([
      {
            path:'/',
            element:<Layout></Layout>,
            children:[
                  {
                   path:'/',
                   element:<Home></Home>  
                  }
                 
            ]
      }
 ])