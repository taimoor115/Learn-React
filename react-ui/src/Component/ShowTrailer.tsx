import useGameDetail from "../hooks/useGameDetail";

interface Props {
  id: string;
}
const ShowTrailer = ({ id }: Props) => {
  const { movies } = useGameDetail(id);
  const first = movies?.map((m) => m?.count).toString();

  return (
    <>
      {first != "0" &&
        movies?.map((t, index) => (
          <video
            key={index}
            src={t?.results[0]?.data[480]}
            poster={t?.results[0]?.preview}
            controls
          ></video>
        ))}
    </>
  );
};
export default ShowTrailer;
