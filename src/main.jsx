import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Root from "./layout/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AddCrafts from "./components/AddCrafts.jsx";
import AllCrafts from "./components/AllCrafts.jsx";
import UpdateCraft from "./components/UpdateCraft.jsx";
import CraftDetails from "./components/CraftDetails.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContextProvider from "./components/ContextProvider/ContextProvider.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addCrafts",
        element: <PrivateRoute> <AddCrafts></AddCrafts> </PrivateRoute>,
      },
      {
        path: "/allCrafts",
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch("https://backend-seven-sable.vercel.app/crafts"),
      },

      {
        path: "/updateCraft/:id",
        element: <PrivateRoute> <UpdateCraft></UpdateCraft> </PrivateRoute> ,
        loader: ({ params }) =>
          fetch(`https://backend-seven-sable.vercel.app/crafts/${params.id}`),
      },

      {
        path: "/craftDetails/:id",
        element: <PrivateRoute> <CraftDetails></CraftDetails> </PrivateRoute> ,
        loader: ({ params }) =>
          fetch(`https://backend-seven-sable.vercel.app/crafts/${params.id}`),
      },

      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
