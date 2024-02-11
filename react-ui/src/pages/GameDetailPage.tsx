import useGames from "../hooks/useGames";

const GameDetailPage = () => {
  const { data } = useGames();
  console.log(data);

  return <div></div>;
};

export default GameDetailPage;
