import { useState, useEffect } from "react";
import apiClient from "../service/apiClient";

interface Genre {
  id: number;
  slug: string;
  image_background: string;
  description: string;
  name: string;
}
interface FetchResponse {
  id: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchResponse>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((err) => setError(err));
  }, []);

  return { genres, error };
};

export default useGenres;
