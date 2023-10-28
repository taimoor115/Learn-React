import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

// Promise are the eventual result or failure of an asyncronus operation
interface User {
  id: number;
  name: string;
}
const Fetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/xusers"
  //       );
  //       setUsers(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };
  //   fetchUser();
  // });
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Fetch;
