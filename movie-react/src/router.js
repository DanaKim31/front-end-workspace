import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: ":no", element: <Detail /> },
    ],
  },
]);

export default router;
