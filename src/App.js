import React from "react";
import { Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import MoviesPage from "./components/MoviesPage.js";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;

// const [currentPage, setCurrentPage] = useState(1);

// const FetchMovies = async (page) => {
//   const response = await fetch(url + page);
//   const movies = await response.json();
//   setMovies((prev) => [...prev, ...movies.results]);
// };

// React.useEffect(() => {
//   FetchMovies(currentPage);
// }, [currentPage]);
