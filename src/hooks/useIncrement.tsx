import { useCallback, useState } from "react";

const useIncrement = ({ base = 0, max = Infinity, min = -Infinity } = {}) => {
  const [count, setCount] = useState(base);

  const increment = useCallback(() => {
    setCount((v) => (v < max ? v + 1 : v));
  }, [max]);

  const decrement = useCallback(() => {
    setCount((v) => (v > min ? v - 1 : v));
  }, [min]);

  return { count, increment, decrement };
};

export default useIncrement;
