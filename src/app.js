import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
/*FoodVilla App/Swiggy clone
 * Header
 *   -Logo
 *   -Nav Items
 * Body
 *   -search
 *   -RestaurantContainer
 *     -Restaurant card
 * Footer
 *  -copyright
 *  - links
 *  - address
 *  - contact
 */

//always use keys to uniquely identify the data
//Plz Donot use index as a key in react bcoz it may affect the performance

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      }
    ]
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//render comvert object to html tag
root.render(<RouterProvider router={appRouter}/>);
