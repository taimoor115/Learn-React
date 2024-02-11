interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score >= 75 ? "error" : score <= 75 ? "warning" : "";

  return (
    <>
      <div
        className={`px-2 rounded-badge badge text-white font-bold badge-lg bg-${color}`}
      >
        {score}
      </div>
    </>
  );
};

export default CriticScore;
