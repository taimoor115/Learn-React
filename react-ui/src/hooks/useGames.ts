import { useState, useEffect } from "react";
import apiClient from "../service/apiClient";
import { Genre } from "./useGenres";

interface Game {
  name: string;
  id: number;
  metacritic: number;
  rating: number;
  released: string;
  background_image: string;
  genres: Genre[];
}
interface FetchResponse {
  id: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse>("/games")
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { games, error, isLoading };
};

export default useGames;
