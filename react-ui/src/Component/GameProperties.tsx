import useGameDetail from "../hooks/useGameDetail";
import CriticScore from "./CriticScore";

interface Props {
  id: string;
}

const GameProperties = ({ id }: Props) => {
  const { game } = useGameDetail(id);

  return (
    <>
      {game.map((g) => (
        <div key={g.id} className="grid grid-cols-2 items-start gap-9">
          <div className="flex flex-col">
            <div className="text-zinc-500 text-base font-bold">Platforms</div>
            {g.parent_platforms.map((genre) => (
              <div className="flex flex-col">{genre.platform.name}</div>
            ))}
          </div>

          <div>
            <div className="text-zinc-500 text-base font-bold">Metascore</div>
            <CriticScore score={g.metacritic} />
          </div>
          <div>
            <div className="text-zinc-500 text-base font-bold">Genres</div>
            {g.genres.map((genre) => (
              <div>{genre.name} </div>
            ))}
          </div>
          <div>
            <div className="text-zinc-500 text-base font-bold">Publishers</div>
            {g.publishers.map((p) => p.name)}
          </div>
        </div>
      ))}
    </>
  );
};

export default GameProperties;
