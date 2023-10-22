

interface Props {
  text: string;
  color?: "primary" | "warning" | "success" | "danger" | "secondary";
  onClick: () => void;
}

const color1 = ["primary", "warning", "success", "danger"];

const Button = ({ text, onClick, color }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
