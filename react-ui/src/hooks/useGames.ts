import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
  name: string;
  id: number;
  metacritic: number;
  rating: number;
  released: string;
  background_image: string;
  genres: Genre[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
