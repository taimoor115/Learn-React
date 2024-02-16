import useGameDetail from "../hooks/useGameDetail";

interface Props {
  id: string;
}
const ShowTrailer = ({ id }: Props) => {
  const { movies } = useGameDetail(id);

  return (
    <>
      {movies.map((t) => (
        <video
          key={t.results[0].id}
          src={t?.results[0]?.data[480]}
          poster={t.results[0].preview}
          controls
        ></video>
      ))}
    </>
  );
};
export default ShowTrailer;
