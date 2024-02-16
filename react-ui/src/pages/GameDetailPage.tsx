import { useParams } from "react-router-dom";
import ExpandableText from "../Component/ExpandableText";
import Header from "../Component/Header";
import useGameDetail from "../hooks/useGameDetail";
import ShowTrailer from "../Component/ShowTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { game } = useGameDetail(slug!);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white p-8">
      {game.map((g) => (
        <>
          <div>
            <Header className="text-5xl font-bold" key={g.id} name={g.name} />
            <ExpandableText children={g.description_raw} />
          </div>
          <ShowTrailer id={slug!} />
        </>
      ))}
    </div>
  );
};

export default GameDetailPage;
