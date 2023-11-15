import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Admin/Components/Adminhome";
import Home from "./components/Userhome";
import AddProjects from "./Admin/Components/AddProjects";
import Register from "./components/Register";
import Usermain from "./User/Components/Usermain";
import { AuthProvider } from "./components/AuthContext";
import ProjectDesc from "./components/ProjectDesc";
import AdminViewProjects from "./Admin/Components/AdminViewProjects";
import UserProjectView from "./User/Components/UserProjectView";
import Search from "@mui/icons-material/Search";
import SearchData from "./components/SearchData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/user",
    element: <Usermain />,
  },
  {
    path: "/addprojects",
    element: <AddProjects />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/projectdesc/:projectname",
    element: <ProjectDesc />,
  },
  {
    path: "/adminprojectdesc/:projectname",
    element: <AdminViewProjects />,
  },

  {
    path: "/userprojectdesc/:projectname",
    element: <UserProjectView />,
  },

  {
    path: "/searchdata/:data",
    element: <SearchData />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
