import { useEffect, useState } from "react";

//hook personnalisé pour détecter les changements de page
export const useHashNavigation = () => {
  const [hash, setHash] = useState(location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { page: hash.replace('#',"").toLowerCase() || "home" };
};
