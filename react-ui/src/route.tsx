import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/sign_up", element: <Form /> },
    ],
  },
]);

export default router;
