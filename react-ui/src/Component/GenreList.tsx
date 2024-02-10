import useGenres from "../hooks/useGenres";
import getCropImage from "../service/image-url";
import Header from "./Header";

const GenreList = () => {
  const { genres } = useGenres();

  // console.log(genres);

  return (
    <>
      <Header
        className="text-3xl ms-6 mt-5 lg:text-5xl md:text-5xl font-extrabold text-white"
        name="Genre List"
      />
      <div className="m-5 lg:m-10 md:m-10  flex scroll-smooth overflow-x-auto whitespace-nowrap ">
        {genres.map((genre) => (
          <div key={genre.id} className="relative group">
            <div className="w-52 h-52 lg:w-72 lg:h-72 md:w-72 md:h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover transition duration-700 hover:opacity-20 opacity-100"
                src={getCropImage(genre.image_background)}
                alt={genre.name}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition duration-700  group-hover:opacity-100">
              <span className="px-4 py-8 text-white text-2xl font-bold">
                {genre.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreList;
