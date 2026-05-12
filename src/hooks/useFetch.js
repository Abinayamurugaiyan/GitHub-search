import { useEffect, useState } from "react";

const useFetch = (username) => {
  const [data, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = "https://api.github.com/users";
        const response = await fetch(`${url}/${username}`);
        if (!response.ok) {
          throw new Error(`user not found`);
        }

        if (response.status === 403) {
          throw new Error("API rate limit exceeded. Try again later.");
        }
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        console.log(response);
        setUserData(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);
  return { data, loading, error };
};
export default useFetch;
