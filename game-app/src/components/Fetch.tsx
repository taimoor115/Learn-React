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
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };
  //   fetchUser();
  // });

  // Delete User
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // Add User Function
  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "Taimoor Hussain" };
    setUsers([...users, newUser]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      // .then((res) => {setUsers([...users, res.data])})
      .then(({ data: savedUser }) => {
        setUsers([...users, savedUser]);
      })
      .catch((err) => setError(err.message));
    setUsers(originalUser);
  };

  // Update Function
  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updateUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}

      {/* Add User */}
      <button className="mb-3 btn btn-primary" onClick={addUser}>
        {"Add"}
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between "
          >
            {user.name}
            <div>
              {/* Update  */}

              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                {"Update"}
              </button>

              {/* Delete */}

              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                {"Delete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fetch;
