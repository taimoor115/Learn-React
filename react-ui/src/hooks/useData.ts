import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useData;
