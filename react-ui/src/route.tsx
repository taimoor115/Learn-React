import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GameDetailPage from "./pages/GameDetailPage";
import GenrePage from "./pages/GenreGamesPage";
import Homepage from "./pages/Homepage";
import PlatformsGames from "./pages/PlatformsGames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/games/:id", element: <GameDetailPage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "genres/:name", element: <GenrePage /> },
  { path: "/platforms/:name", element: <PlatformsGames /> },
]);

export default router;
