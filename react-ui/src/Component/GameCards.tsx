import { Link } from "react-router-dom";
import getCropImage from "../service/image-url";
import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <div className="card w-80 bg-neutral-950 shadow-xl">
      <figure>
        <img
          className="object-cover"
          src={getCropImage(game.background_image)}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold text-left ">{game.name}</h2>
        <span>
          {game.genres.map((g) => (
            <p className="inline-block pe-1">{g.name}</p>
          ))}
        </span>
        <span>{game.rating}/5</span>
        <span>{game.released}</span>
        <CriticScore score={game.metacritic} />
        <div className="card-actions justify-end">
          <Link to={`/games/${game.id}`}>
            <button className="btn btn-active text-white font-extrabold text-lg">
              Check
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
