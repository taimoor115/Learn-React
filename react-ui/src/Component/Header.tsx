interface Props {
  name: string;
  className?: string;
}
const Header = ({ name, className }: Props) => {
  return <h1 className={className}>{name}</h1>;
};

export default Header;
