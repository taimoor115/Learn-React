import { useParams } from "react-router-dom";
import GameCards from "../Component/GameCards";
import Header from "../Component/Header";
import useGames, { Game } from "../hooks/useGames";
import { useEffect, useState } from "react";
import Skeleton from "../Component/Skeleton";

const GenrePage = () => {
  const [game, setGames] = useState<Game[]>([]);
  const { data, isLoading } = useGames();
  const { name } = useParams();
  const skeleton = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    setGames(data?.filter((g) => g.genres.some((genre) => genre.name == name)));
  }, [data, name]);

  return (
    <>
      {name ? (
        <Header
          className="font-extrabold text-3xl text-center p-4 lg:text-4xl md:text-4xl text-white"
          name={name}
        />
      ) : (
        ""
      )}
      <div className="grid text-white grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center space-y-3  p-3  justify-items-center items-center ">
        {isLoading && skeleton.map((s) => <Skeleton key={s} />)}
        {game.map((g) => (
          <GameCards key={g.id} game={g} />
        ))}
      </div>
    </>
  );
};

export default GenrePage;
