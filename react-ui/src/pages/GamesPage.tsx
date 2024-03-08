import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCards from "../Component/GameCards";
import Header from "../Component/Header";
import useGames, { Game } from "../hooks/useGames";
import Skeleton from "../Component/Skeleton";

const GamesPage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const { data, isLoading } = useGames();
  const { name, slug } = useParams();
  const skeleton = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (data.length) {
      if (slug) {
        // Genre-based filtering
        setGames(
          data.filter((g) => g.genres.some((genre) => genre.slug === slug))
        );
      } else {
        // Platform-based filtering
        setGames(
          data.filter((platform) =>
            platform.platforms.some((p) => p.platform.name === name)
          )
        );
      }
    }
  }, [data, slug, name]);

  return (
    <>
      {name ? (
        <Header
          className="font-extrabold text-3xl text-center p-4 lg:text-4xl md:text-4xl text-white"
          name={name}
        />
      ) : (
        <Header
          name={(slug && slug?.charAt(0).toUpperCase() + slug?.slice(1)) || ""}
          className="font-extrabold text-3xl text-center p-4 lg:text-4xl md:text-4xl text-white"
        />
      )}

      <div className="grid text-white grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center space-y-3  p-3  justify-items-center items-center ">
        {isLoading && skeleton.map((s) => <Skeleton key={s} />)}
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GamesPage;
