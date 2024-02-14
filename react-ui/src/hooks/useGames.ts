import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

interface GamesPlatform {
  platform: Platform;
}
export interface Game {
  name: string;
  id: number;
  metacritic: number;
  rating: number;
  released: string;
  background_image: string;
  genres: Genre[];
  platforms: GamesPlatform[];
  parent_platforms: { platform: Platform }[];
}

const useGames = () => useData<Game>("/games");

export default useGames;
