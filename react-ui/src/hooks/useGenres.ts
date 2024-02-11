import { useState, useEffect } from "react";
import apiClient from "../service/apiClient";

export interface Genre {
  id: number;
  slug: string;
  image_background: string;
  name: string;
}
interface FetchResponse {
  id: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse>("/genres")
      .then((res) => {
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
