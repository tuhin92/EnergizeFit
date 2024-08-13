import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Service from "../Components/Service";
import Contact from "../Components/Contact";
import About from "../Components/About";

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
            path: 'contact',
            element: <Contact></Contact>
        },
        {
            path: 'about',
            element: <About></About>
        }
      ]
    },
  ]);

  export default router;