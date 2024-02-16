interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score >= 80 ? "error" : score < 80 ? "warning" : "";

  return (
    <>
      <div
        className={`rounded-badge badge text-white font-bold badge-lg ${
          color === "error"
            ? "bg-error"
            : color === "warning"
            ? "bg-warning"
            : ""
        }`}
      >
        {score}
      </div>
    </>
  );
};

export default CriticScore;
