import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface Game {
  id: number;
  metacritic: number;
  rating: number;
  released: string;
  background_image: string;
}
interface FetchResponse {
  id: number;
  results: Game[];
}
const Homepage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));
  });
  console.log(games);
  return (
    <>
      <Carousel
        // autoFocus={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={true}
        useKeyboardArrows={true}
      >
        {games.map((game) => (
          <div>
            <img src={game.background_image} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Homepage;
