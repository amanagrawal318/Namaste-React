import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
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

/* // another name of Lazy loading
- Chunking
- code spliting
- Dynamic bundling
- Lazy loading
- On demand Loading
- dynamic Import
*/

const Grocery = lazy(() => import("./components/Grocery"));

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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//render comvert object to html tag
root.render(<RouterProvider router={appRouter} />);
