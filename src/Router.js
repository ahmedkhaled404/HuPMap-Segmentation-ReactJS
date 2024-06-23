import { createHashRouter } from "react-router-dom";
import PredictPage from "./pages/PredictPage/PredictPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./Layout/Layout";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/predict", element: <PredictPage /> },
    ],
  },
]);

export default router;
