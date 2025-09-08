import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext(null);

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
  
      let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=0b3c988eae8593f369e4b008b62a50f4`;
     
      fetch(url)
        .then((res) => res.json())
        .then((data) => setGenre(data.genres));
    }, []);
  

  const toggleWatchList = (movie) => {
    const index = watchList.findIndex((m) => m.id === movie.id);
    if (index === -1) {
      setWatchList([...watchList, movie]);
    } else {
      setWatchList([
        ...watchList.slice(0, index),
        ...watchList.slice(index + 1),
      ]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchList, toggleWatchList, genre }}>
      {children}
    </WatchListContext.Provider>
  );
};