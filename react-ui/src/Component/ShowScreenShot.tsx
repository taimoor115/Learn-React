import useGameDetail from "../hooks/useGameDetail";

interface Props {
  id: string;
}
const ShowScreenShot = ({ id }: Props) => {
  const { screenShots } = useGameDetail(id);
  console.log(screenShots);

  return (
    <>
      {screenShots?.map((s) => s.results?.map((ss) => <img src={ss.image} />))}
    </>
  );
};

export default ShowScreenShot;
