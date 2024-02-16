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

const useGameDetail = (slug: string) => {
  const [data, setData] = useState<GameDetails[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get(`/games/${slug}`)
      .then((res) => setData([res.data]))
      .catch((err) => setError(err));
  }, [slug]);

  return { data, error };
};

export default useGameDetail;
