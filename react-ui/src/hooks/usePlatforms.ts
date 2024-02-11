import { useState, useEffect } from "react";
import apiClient from "../service/apiClient";

export interface Platform {
  id: number;
  slug: string;
  image_background: string;
  name: string;
}
interface FetchResponse {
  id: number;
  results: Platform[];
}
const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse>("/platforms")
      .then((res) => {
        setIsLoading(false);
        setPlatforms(res.data.results);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { platforms, error, isLoading };
};

export default usePlatforms;
