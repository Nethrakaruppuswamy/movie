import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=e9201d3baf9b6933d426a63ad5a72019`;
    if (searchTerm) {
      url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&page=${page}&api_key=e9201d3baf9b6933d426a63ad5a72019`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [page, searchTerm]);

  return (
    <div className="p-6 mt-16">
      <input
        type="text"
        placeholder="🔍 Search for a movie..."
        className="p-3 text-white w-3/4 md:w-1/2 border border-gray-700 rounded-xl bg-gray-900/80 backdrop-blur-md fixed top-24 left-1/2 transform -translate-x-1/2 z-10
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 shadow-md"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
      <div className="pagination-container flex justify-between gap-4 mt-8">
        <button
          disabled={page === 1}
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-lg cursor-pointer hover:from-gray-600 hover:to-gray-800 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          Previous
        </button>
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg cursor-pointer hover:from-blue-500 hover:to-blue-700 transition shadow-md"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Next 
        </button>
      </div>
    </div>
  );
};
export default Home;