import { Link } from "react-router-dom";
import getCropImage from "../service/image-url";
import CriticScore from "./CriticScore";
import { Game } from "../hooks/useGames";
import Skeleton from "./Skeleton";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <>
      {game ? (
        <div className="card w-80 bg-neutral-950 shadow-xl">
          <figure>
            <img
              className="object-cover"
              src={getCropImage(game.background_image)}
              alt={`${game.name} Background`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-extrabold text-left">{game.name}</h2>
            <span>
              {game.genres.map((g) => (
                <p key={g.id} className="inline-block pe-1">
                  {g.name}
                </p>
              ))}
            </span>
            <span>{game.rating}/5</span>
            <span>{game.released}</span>
            <CriticScore score={game.metacritic} />
            <div className="card-actions justify-end">
              <Link to={`/detail/games/${game.slug}`}>
                <button className="btn btn-active text-white font-extrabold text-lg">
                  Check
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default GameCards;
