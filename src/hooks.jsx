import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const useRemoteService = (initial) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:8080/books");
        setData(data);
        console.log(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return { data, loading, error };
};
