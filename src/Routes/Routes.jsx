import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ImportantDates from "../Pages/ImportantDates/ImportantDates";
import Submission from "../Pages/Submission/Submission";
import EditorsBio from "../Pages/EditorsBio/EditorsBio";
import Contact from "../Pages/Contact/Contact";

const Routes= createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/importantDates",
        element: <ImportantDates></ImportantDates>
      },
      {
        path:"/submission",
        element:<Submission></Submission>
      },
      {
        path:"/editorsBio",
        element:<EditorsBio></EditorsBio>
      },
      {
        path:"/contact",
element:<Contact></Contact>
      }
    ]
  },
]);
export default Routes;