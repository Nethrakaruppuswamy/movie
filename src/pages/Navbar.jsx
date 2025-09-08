import { useContext } from "react";
import { Link } from "react-router-dom";

import { WatchListContext } from "../context/WatchListContext";

const Navbar = () => {
  const { watchList } = useContext(WatchListContext);
  return (
    <nav className="bg-gray-900 px-6 py-4 text-white flex justify-between items-center shadow-md fixed w-full top-0 z-10">
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-wide hover:text-yellow-400 transition duration-300"
      >
       Movie App
      </Link>

      <Link
        to="/watchlist"
        className="text-lg font-medium text-white px-4 py-2 rounded-full hover:underline transition duration-300"
      >
        Watchlist ({watchList.length})
      </Link>
    </nav>
  );
};
export default Navbar;