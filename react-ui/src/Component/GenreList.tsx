import { Link } from "react-router-dom";
import useGenres from "../hooks/useGenres";
import getCropImage from "../service/image-url";
import Header from "./Header";

const GamesLists = () => {
  const { data } = useGenres();
  return (
    <>
      {data && (
        <Header
          className="text-3xl ms-6 mt-5 lg:text-4xl md:text-4xl font-extrabold text-white"
          name="Genres"
        />
      )}
      <div className="m-5 lg:m-12 md:m-10 rounded-lg flex scroll-smooth overflow-x-auto whitespace-nowrap ">
        {data.map((genre) => (
          <div key={genre.id} className="relative group">
            <div className="w-52 h-52 lg:w-72 lg:h-60 md:w-72 md:h-72 overflow-hidden">
              <Link to={`genres/${genre.slug}`}>
                <img
                  className="w-full h-full object-cover transition duration-700 hover:opacity-20 opacity-100"
                  src={getCropImage(genre.image_background)}
                  alt={genre.name}
                />
              </Link>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0  transition duration-700  group-hover:opacity-100">
              <span className="px-4 py-8 text-white text-3xl lg:text-4xl md:text-4xl text-wrap font-bold">
                <Link to={`genres/${genre.slug}`}>{genre.name}</Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GamesLists;
