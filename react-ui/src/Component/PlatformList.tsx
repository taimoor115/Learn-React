import { Link } from "react-router-dom";
import usePlatforms from "../hooks/usePlatforms";
import Header from "./Header";

const PlatformList = () => {
  const { data } = usePlatforms();
  console.log(data);

  return (
    <>
      <Header
        className="text-3xl ms-6 mt-5 lg:text-4xl md:text-4xl font-extrabold text-white"
        name="Platforms"
      />

      <div className="m-5 lg:m-10 md:m-10 rounded-lg flex scroll-smooth overflow-x-auto whitespace-nowrap ">
        {data.map((platform) => (
          <div key={platform.id} className="relative flex group">
            <div className="w-52 h-52 lg:w-72 lg:h-60 md:w-72 md:h-72 overflow-hidden">
              <Link to={`platforms/${platform.name}`}>
                <img
                  className="w-full h-full object-cover transition duration-700 hover:opacity-20 opacity-100"
                  src={platform.image_background}
                />
              </Link>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0  transition duration-700  group-hover:opacity-100">
              <span className="px-4 py-8 text-white text-3xl lg:text-4xl md:text-4xl text-wrap font-bold">
                <Link to={`platforms/${platform.name}`}>{platform.name}</Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlatformList;
