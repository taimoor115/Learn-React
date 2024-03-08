import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { Platform } from "./usePlatforms";
import { Genre } from "./useGenres";
import { GamesPlatform } from "./useGames";

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
  platforms: GamesPlatform[];
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
interface FetchResponse {
  count: number;
  results: Trailer[];
}
interface ScreenShots {
  results: { id: string; image: string; height: number; width: number }[];
}

interface Achievements {
  count: number;
  results: { name: string; image: string }[];
}

interface Series {
  count: number;
}

const useGameDetail = (endpoint: string) => {
  const [game, setGame] = useState<GameDetails[]>([]);
  const [movies, setMovies] = useState<FetchResponse[]>([]);
  const [error, setError] = useState("");
  const [trailerError, setTrailerError] = useState("");
  const [screenShots, setScreenShots] = useState<ScreenShots[]>([]);
  const [screenShotsErrors, setScreenShotsError] = useState("");
  const [achieve, setAchieve] = useState<Achievements[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  useEffect(() => {
    apiClient
      .get(`/games/${endpoint}`)
      .then((res) => setGame([res.data]))
      .catch((err) => setError(err));

    apiClient
      .get(`/games/${endpoint}/movies`)
      .then((res) => setMovies([res.data]))
      .catch((err) => setTrailerError(err));

    apiClient
      .get(`/games/${endpoint}/screenshots`)
      .then((res) => setScreenShots([res.data]))
      .catch((err) => setScreenShotsError(err));

    apiClient
      .get(`/games/${endpoint}/achievements`)
      .then((res) => setAchieve([res.data]));

    apiClient
      .get(`/games/${endpoint}/game-series`)
      .then((res) => setSeries([res.data]));
  }, [endpoint]);

  return {
    game,
    error,
    movies,
    trailerError,
    screenShots,
    screenShotsErrors,
    achieve,
    series,
  };
};

export default useGameDetail;
