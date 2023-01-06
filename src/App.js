import React from "react";
import Movies from "./components/Movies";
import loadMore from "./components/loadMore";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=6ccca98e4a2b6ea8741b965ec5d916a1&language=en-US&page=";

function App() {
  // const [currentPage, setCurrentPage] = React.useState(1);

  // const loadMore = () => {
  //   setCurrentPage((previous) => previous + 1);
  // };
  // const [movies, setMovies] = React.useState([]);
  // const FetchMovies = async (currentPage) => {
  //   const response = await fetch(url + currentPage);
  //   const movies = await response.json();
  //   setMovies((prev) => [...prev, ...movies.results]);
  // };

  // React.useEffect(() => {
  //   FetchMovies(currentPage);
  // }, [currentPage]);

  const [movies, setMovies] = React.useState([]);
  const FetchMovies = async () => {
    try {
      const response = await fetch(url);
      const movies = await response.json();

      setMovies(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    FetchMovies();
  }, []);

  return (
    <section>
      <div>
        <Movies movies={movies} />
      </div>
      <button onClick={loadMore}>load more</button>
    </section>
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
