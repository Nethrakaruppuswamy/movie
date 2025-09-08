import { useContext, useState } from "react"
import GenreFilter from "../components/GenreFilter"
import { WatchListContext } from "../context/WatchListContext"
import MovieCard from "../components/MovieCard"

const Watchlist = () => {
  const { watchList, genre } = useContext(WatchListContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState(null)

  const filteredMovies = watchList
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((movie) => {
      return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
    })

  return (
    <div className="p-6 mt-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search your watchlist..."
        className="p-3 text-white w-3/4 md:w-1/2 border border-gray-700 rounded-xl bg-gray-900/80 backdrop-blur-md fixed top-24 left-1/2 transform -translate-x-1/2 z-10
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 shadow-md"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Genre Filter */}
      <div className="mt-20 flex justify-center">
        <GenreFilter
          genre={genre}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>

      {/* Movie Grid */}
      <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })
        ) : (
          <p className="text-center text-gray-400 col-span-full mt-12 text-lg">
            🚫 No movies found in your watchlist.
          </p>
        )}
      </div>
    </div>
  )
}

export default Watchlist