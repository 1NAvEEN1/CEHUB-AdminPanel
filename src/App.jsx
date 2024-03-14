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
const Map = Loadable(lazy(() => import("./pages/Dashboard/Map")));
const Suppliers = Loadable(lazy(() => import("./pages/Suppliers/Suppliers")));
const Process = Loadable(lazy(() => import("./pages/Verification/Process")));
const Verified = Loadable(lazy(() => import("./pages/Verification/Verified")));
const Rejected = Loadable(lazy(() => import("./pages/Verification/Rejected")));
const Settings = Loadable(lazy(() => import("./pages/Settings/Settings")));
const ViewProfile = Loadable(lazy(() => import("./pages/ViewProfile/ViewProfile")));
const Test = Loadable(lazy(() => import("./pages/Test/Test")));

const VerifyBasicDetails = Loadable(
  lazy(() => import("./pages/VerificationProcess/BasicDetails"))
);
const VerifyOtherDetails = Loadable(
  lazy(() => import("./pages/VerificationProcess/OtherDetails"))
);
const VerifyProductDetails = Loadable(
  lazy(() => import("./pages/VerificationProcess/ProductDetails"))
);
//--------------------------------------------------------------//

const router = createBrowserRouter([
  // {
  //   path: "/conferences/:shortName/:year",
  //   element: <Registration />,
  // },
  {
    path: "/CEHUB-AdminPanel/",
    element: <Login />,
  },
  {
    path: "/CEHUB-AdminPanel/test",
    element: <Test />,
  },
  {
    path: "/CEHUB-AdminPanel/",
    element: <Layout />,
    children: [
      {
        path: "/CEHUB-AdminPanel/Dashboard/Overview",
        element: <Overview />,
      },
      {
        path: "/CEHUB-AdminPanel/Dashboard/Map",
        element: <Map />,
      },
      {
        path: "/CEHUB-AdminPanel/Suppliers",
        element: <Suppliers />,
      },
      {
        path: "/CEHUB-AdminPanel/CEHUB-AdminPanel/Verification/Process",
        element: <Process />,
      },
      {
        path: "/CEHUB-AdminPanel/Verification/Process/Verify/BasicDetails",
        element: <VerifyBasicDetails />,
      },
      {
        path: "/CEHUB-AdminPanel/Verification/Process/Verify/ProductDetails",
        element: <VerifyProductDetails />,
      },
      {
        path: "/CEHUB-AdminPanel/Verification/Process/Verify/OtherDetails",
        element: <VerifyOtherDetails />,
      },
      {
        path: "/CEHUB-AdminPanel/Verification/Verified",
        element: <Verified />,
      },
      {
        path: "/CEHUB-AdminPanel/Verification/Rejected",
        element: <Rejected />,
      },
      {
        path: "/CEHUB-AdminPanel/ViewProfile/:id",
        element: <ViewProfile />,
      },
      {
        path: "/CEHUB-AdminPanel/ViewProfile/:id",
        element: <ViewProfile />,
      },
      {
        path: "/CEHUB-AdminPanel/Settings",
        element: <Settings />,
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
