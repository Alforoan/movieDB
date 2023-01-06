import React from "react";

import Movie from "./Movie";

const Movies = ({ movies }) => {
  const [infoClicked, setInfoClicked] = React.useState(false);
  const [isFavorited, setIsFavorited] = React.useState([]);
  const [search, setSearch] = React.useState("");

  function handleChange(e) {
    const searchWord = e.target.value;
    setSearch(searchWord);
  }

  const FilteredMovies = movies.filter((movie) => {
    if (search.length > 0) {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    } else {
      return movie;
    }
  });

  const sortByClick = () => {};

  const handleClick = (id) => {
    let specificMovie = movies.filter((movie) => movie.id === id);
    if (isFavorited.includes(specificMovie)) {
      setIsFavorited((prev) =>
        prev.filter((prevItem) => prevItem !== specificMovie)
      );
      setIsFavorited([...isFavorited]);
    } else {
      setIsFavorited((isFavorited) => [...isFavorited, specificMovie]);
    }
    console.log(isFavorited);
  };

  return (
    <section>
      <div>
        <h2>Movies</h2>
        <form type="submit">
          <input
            onChange={handleChange}
            placeholder="Search Movie"
            type="text"
          />
        </form>
      </div>
      <div>
        <button onClick={sortByClick}>Sort by rating</button>
      </div>
      <div className="movie-list">
        {FilteredMovies.map((movie, index) => {
          return (
            <Movie
              key={index}
              setIsFavorited={setIsFavorited}
              handleClick={handleClick}
              {...movie}
            />
          );
        })}
      </div>
    </section>
  );
};
// {movies.map((movie, index) => {
//           return (
//             <Movie
//               setIsFavorited={setIsFavorited}
//               handleClick={handleClick}
//               key={index}
//               {...movie}
//             />
//           );
//         })}
export default Movies;
