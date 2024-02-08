
interface Props {
  name: string;
}
const Header = ({ name }: Props) => {
  return <h1 className="text-center font-bold text-4xl">{name}</h1>;
};

export default Header;
