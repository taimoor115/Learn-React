import styles from "./Button.module.css"

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <button
        className={[styles.btn, styles["btn-" + color]].join("  ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default button;
