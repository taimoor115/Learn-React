import { useParams } from "react-router-dom";
import ExpandableText from "../Component/ExpandableText";
import GameProperties from "../Component/GameProperties";
import Header from "../Component/Header";
import ShowScreenShot from "../Component/ShowScreenShot";
import ShowTrailer from "../Component/ShowTrailer";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { game } = useGameDetail(slug!);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white p-8">
      {game.map((g) => (
        <>
          <div className="space-y-6">
            <div>
              <Header
                className="text-3xl lg:text-4xl md:text-4xl font-bold"
                key={g.id}
                name={g.name}
              />
            </div>
            <div>
              <ExpandableText children={g.description_raw} />
            </div>
            <div>
              <GameProperties id={slug!} />
            </div>
          </div>
          <div>
            <ShowTrailer id={slug!} />
            <div className="grid grid-cols-2">
              <ShowScreenShot id={g.id.toString()} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default GameDetailPage;
