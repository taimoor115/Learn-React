import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/about", element: <About /> },
]);

export default router;
