import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GameDetailPage from "./pages/GameDetailPage";
import GamesPage from "./pages/GamesPage";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import Form from "./pages/Form";

const router = createBrowserRouter([
  {
    path: "/detail/",
    element: <Layout />,
    children: [
      { path: "games/:slug", element: <GameDetailPage /> },
      { path: "sign_up", element: <Form /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  { path: "/", element: <Homepage /> },
  { path: "genres/:slug", element: <GamesPage /> },
  { path: "/platforms/:name", element: <GamesPage /> },
]);

export default router;
