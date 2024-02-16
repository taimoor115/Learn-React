import { useParams } from "react-router-dom";
import Header from "../Component/Header";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data } = useGameDetail(slug!);
  console.log(data);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {data.map((game) => (
        <>
          <div>
            <Header key={game.id} name={game.name} />
          </div>
          <div>
            <p>{game.description_raw}</p>
          </div>

          <div>{game.metacritic}</div>
          <div>{game.released}</div>
        </>
      ))}
    </div>
  );
};

export default GameDetailPage;
