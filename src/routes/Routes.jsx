import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import AddVolunteerPost from "../pages/AddVolunteerPost";
import PrivateRoute from "./PrivateRoute";
import NeedVolunteer from "../pages/NeedVolunteer";
import DetailsVolunteer from "../pages/DetailsVolunteer";
import BeVolunteer from "../pages/BeVolunteer";
import MyVolunteerPost from "../pages/MyVolunteerPost";
import UpdatePost from "../pages/UpdatePost";
import MyVolunteerRequest from "../pages/MyVolunteerRequest";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/services`),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/need-volunteer',
        element: <NeedVolunteer />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/addPosts`),
      },
      {
        path: '/add-volunteer',
        element: <PrivateRoute><AddVolunteerPost /></PrivateRoute>,
      },
      {
        path: '/details-volunteer/:id',
        element: <PrivateRoute><DetailsVolunteer /></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addPosts/${params.id}`),
      },
      {
        path: '/be-volunteer/:id',
        element: <PrivateRoute><BeVolunteer /></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addPosts/${params.id}`),
      },
      {
        path: '/my-volunteer-post',
        element: <PrivateRoute><MyVolunteerPost /></PrivateRoute>,
      },
      {
        path: '/my-volunteer-request',
        element: <PrivateRoute><MyVolunteerRequest /></PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdatePost /></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addPosts/${params.id}`),
      },
    ],
  },
]);

export default router;