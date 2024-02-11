import { useParams } from "react-router-dom";
import GameCards from "../Component/GameCards";
import Header from "../Component/Header";
import useGames from "../hooks/useGames";

const GenrePage = () => {
  const { data, isLoading } = useGames();

  const { slug } = useParams();

  const game = data?.filter((g) =>
    g.genres.some((genre) => genre.slug == slug)
  );

  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <>
      {slug ? (
        <Header
          className="font-extrabold text-3xl text-center p-4 lg:text-4xl md:text-4xl text-white"
          name={slug.charAt(0).toUpperCase() + slug.slice(1, slug.length)}
        />
      ) : (
        ""
      )}
      <div className="grid text-white grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center space-y-3  p-3  justify-items-center items-center ">
        {game.map((g) => (
          <GameCards key={g.id} game={g} />
        ))}
      </div>
    </>
  );
};

export default GenrePage;
