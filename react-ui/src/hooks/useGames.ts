import { useState, useEffect } from "react";
import apiClient from "../service/apiClient";

interface Game {
  name: string;
  id: number;
  metacritic: number;
  rating: number;
  released: string;
  background_image: string;
}
interface FetchResponse {
  id: number;
  results: Game[];
}

const useGames = (endpoint: string) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchResponse>(endpoint)
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));
  });

  return { games, error };
};

export default useGames;
