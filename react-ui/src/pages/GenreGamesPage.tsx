import { Link, useParams } from "react-router-dom";
import useGames from "../hooks/useGames";
import Header from "../Component/Header";
import CriticScore from "../Component/CriticScore";
import getCropImage from "../service/image-url";

const GenrePage = () => {
  const { games, isLoading } = useGames();
  const { slug } = useParams();

  console.log(games);

  const game = games.filter((g) =>
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
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                className="object-cover"
                src={getCropImage(g.background_image)}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-extrabold text-left ">{g.name}</h2>
              <span>
                {g.genres.map((genre) => (
                  <p className="inline-block pe-1">{genre.name}</p>
                ))}
              </span>
              <span>Rating {g.rating}</span>
              <spaActionn>{g.released}</spaActionn>
              <CriticScore score={g.metacritic} />
              <div className="card-actions justify-end">
                <Link to={`/games/${g.id}`}>
                  <button className="btn btn-accent btn-outline font-bold text-base">
                    Check
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenrePage;
