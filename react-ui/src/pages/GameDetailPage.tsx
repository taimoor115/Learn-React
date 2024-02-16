import { useParams } from "react-router-dom";
import Header from "../Component/Header";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "../Component/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { game, movies } = useGameDetail(slug!);
  console.log(movies);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white p-8">
      {game.map((g) => (
        <>
          <div>
            <Header className="text-5xl font-bold" key={g.id} name={g.name} />
          </div>
          <div>
            <ExpandableText children={g.description_raw} />
          </div>

          <div>{g.metacritic}</div>
          <div>{g.released}</div>

          <div>{/* <video src={movies}></video> */}</div>
        </>
      ))}
    </div>
  );
};

export default GameDetailPage;
