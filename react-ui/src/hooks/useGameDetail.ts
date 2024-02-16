import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";

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
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: { name: string }[];
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
interface FetchResponse {
  results: Trailer[];
}
interface ScreenShots {
  results: { id: string; image: string; height: number; width: number }[];
}

const useGameDetail = (endpoint: string) => {
  const [game, setGame] = useState<GameDetails[]>([]);
  const [movies, setMovies] = useState<FetchResponse[]>([]);
  const [error, setError] = useState("");
  const [trailerError, setTrailerError] = useState("");
  const [screenShots, setScreenShots] = useState<ScreenShots[]>([]);
  const [screenShotsErrors, setScreenShotsError] = useState("");
  useEffect(() => {
    apiClient
      .get(`/games/${endpoint}`)
      .then((res) => setGame([res.data]))
      .catch((err) => setError(err));

    apiClient
      .get(`/games/${endpoint}/movies`)
      .then((res) => setMovies([res.data]))
      .catch((err) => setTrailerError(err));
  }, [endpoint]);

  apiClient
    .get(`/games/${endpoint}/screenshots`)
    .then((res) => setScreenShots([res.data]))
    .catch((err) => setScreenShotsError(err));

  return { game, error, movies, trailerError, screenShots, screenShotsErrors };
};

export default useGameDetail;
