import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store";
import React, { lazy } from "react";
import ThemeProvider from "./theme";
import Loadable from "./components/Loadable/Loadable";
import LoadingAnimation from "./components/LoadingAnimation/LoadingAnimation";
import SuccessMessage from "./components/SuccessMessage/SuccessMessage";

//----------------------import Pages-----------------------------//
const Login = Loadable(lazy(() => import("./pages/Login/Login")));
const Layout = Loadable(lazy(() => import("./layout")));
const Overview = Loadable(lazy(() => import("./pages/Dashboard/Overview")));
const Test = Loadable(lazy(() => import("./pages/Test/Test")));

//--------------------------------------------------------------//

const router = createBrowserRouter([
  // {
  //   path: "/conferences/:shortName/:year",
  //   element: <Registration />,
  // },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Dashboard/Overview",
        element: <Overview />,
      },
      {
        path: "/Dashboard/Map",
        element: <Overview />,
      },
      {
        path: "/Suppliers",
        element: <Overview />,
      },
      {
        path: "/Verification/Process",
        element: <Overview />,
      },
      {
        path: "/Verification/Verified",
        element: <Overview />,
      },
      {
        path: "/Verification/Rejected",
        element: <Overview />,
      },
      {
        path: "/Settings",
        element: <Overview />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SuccessMessage />
        <LoadingAnimation />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;