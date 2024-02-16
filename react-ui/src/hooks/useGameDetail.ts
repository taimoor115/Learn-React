import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  metacritic: number;
  released: string;
  background_image: string;
  background_image_additional: string;
  rating: number;
  rating_top: number;
}

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: string;
}

const useGameDetail = (endpoint: string) => {
  const [game, setGame] = useState<GameDetails[]>([]);
  const [movies, setMovies] = useState<Trailer[]>([]);
  const [error, setError] = useState("");
  const [trailerError, setTrailerError] = useState("");

  useEffect(() => {
    apiClient
      .get(`/games/${endpoint}`)
      .then((res) => setGame([res.data]))
      .catch((err) => setError(err));

    apiClient
      .get(`/games/${endpoint}/movies`)
      .then((res) => setMovies(res.data))
      .catch((err) => setTrailerError(err));
  }, [endpoint]);

  return { game, error, movies, trailerError };
};

export default useGameDetail;
