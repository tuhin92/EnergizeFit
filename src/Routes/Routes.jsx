import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Service from "../Components/Service";
import About from "../Components/About";
import Pricing from "../Components/Pricing";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'service',
            element: <Service></Service>
        },
        {
            path: 'price&schedule',
            element: <Pricing></Pricing>
        },
        {
            path: 'about',
            element: <About></About>
        }
      ]
    },
  ]);

  export default router;