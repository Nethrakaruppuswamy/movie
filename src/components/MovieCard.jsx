import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchListContext";

const MovieCard = ({ movie }) => {
  const { watchList, toggleWatchList } = useContext(WatchListContext);
  const inWatchlist = watchList.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <button
          className="absolute top-3 right-3 bg-gray-800 p-2 rounded-full text-red-500 hover:bg-red-600 hover:text-white transition duration-200 shadow-md"
          onClick={() => toggleWatchList(movie)}
        >
          {inWatchlist ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold truncate text-white">{movie.title}</h3>
        <p className="text-sm mt-1 text-white">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;