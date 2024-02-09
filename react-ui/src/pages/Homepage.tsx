import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useGames from "../hooks/useGames";
const Homepage = () => {
  const { games } = useGames("/games");

  console.log(games);

  return (
    <Carousel
      autoFocus={true}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      transitionTime={3000}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      dynamicHeight={true}
      useKeyboardArrows={true}
    >
      {games.map((game) => (
        <div key={game.id} className="relative ">
          <img
            className="h-52 lg:h-96 opacity-40 object-fit-cover"
            src={game.background_image}
            alt={game.name}
          />

          <div className="absolute text-left top-1/4 pl-12 text-white">
            <div className="text-3xl lg:text-6xl md:text-6xl w-3/4 font-extrabold">
              {game.name}
            </div>
            <div>
              <span>Released Date: {game.released}</span>
            </div>
            <div>Rating {game.rating}</div>
            <div>Metacitics {game.metacritic}</div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Homepage;
