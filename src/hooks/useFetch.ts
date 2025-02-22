import { useState, useEffect } from "react";
import axios from "axios";

type FetchResult = {
  loading: boolean;
  data: { body: string; id: number; title: string; userId: number }[] | null;
  error: Error | null;
};

export const useFetch = (url: string): FetchResult => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<[] | null>(null);
  const [error, seterror] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error", error);
        seterror(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};
