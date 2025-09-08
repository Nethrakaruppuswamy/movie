import { useContext } from "react";

const GenreFilter = ({genre, setSelectedGenre}) => {
  return (
    <div className="genre-filter-container mb-4">
      <select
        className="w-full p-2 mb-4 rounded-lg border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {genre.map((g) => (
          <option key={g} value={g.id}>{g.name}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;