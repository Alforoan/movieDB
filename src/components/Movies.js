import React from "react";

import Movie from "./Movie";
import RatingOrder from "./RatingOrder";

const Movies = ({ movies }) => {
  const [infoClicked, setInfoClicked] = React.useState(false);
  const [isFavorited, setIsFavorited] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [sortedByRating, setSortedByRating] = React.useState(false);
  const [sortPressed, setSortPressed] = React.useState(false);
  const [highLow, setHighLow] = React.useState(false);
  const [lowHigh, setLowHigh] = React.useState(false);
  const [value, setValue] = React.useState("Default");
  const handleEvent = (e) => {
    setValue(e.target.value);
  };
  const handleHighLow = () => {
    setHighLow(true);
  };
  const handleLowHigh = () => {
    setLowHigh(true);
  };

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

  const sortByClick = () => {
    setSortPressed((prev) => !prev);
  };

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
        <label>
          Sort by:
          <select onChange={handleEvent}>
            <option value="Default">Default</option>
            <option value="AlphabeticalOrder">Alphabetical Order</option>
            <option value="HightoLow">Rating(high to low)</option>
            <option value="LowtoHigh">Rating(low to high)</option>
          </select>
        </label>
      </div>
      <div>
        <h4 onClick={sortByClick}>
          {sortPressed ? (
            <RatingOrder
              handleHighLow={handleHighLow}
              handleLowHigh={handleLowHigh}
              setHighLow={setHighLow}
              setLowHigh={setLowHigh}
            />
          ) : (
            "Sort by rating"
          )}
        </h4>
      </div>
      <div className="movie-list">
        {value === "Default"
          ? FilteredMovies.filter(
              (movie, index) => FilteredMovies.indexOf(movie) === index
            ).map((movie, index) => {
              return (
                <Movie
                  key={index}
                  setIsFavorited={setIsFavorited}
                  handleClick={handleClick}
                  {...movie}
                />
              );
            })
          : value === "HightoLow"
          ? FilteredMovies.sort((a, b) => b.vote_average - a.vote_average).map(
              (movie, index) => {
                return (
                  <Movie
                    key={index}
                    setIsFavorited={setIsFavorited}
                    handleClick={handleClick}
                    {...movie}
                  />
                );
              }
            )
          : value === "LowtoHigh"
          ? FilteredMovies.sort((a, b) => a.vote_average - b.vote_average).map(
              (movie, index) => {
                return (
                  <Movie
                    key={index}
                    setIsFavorited={setIsFavorited}
                    handleClick={handleClick}
                    {...movie}
                  />
                );
              }
            )
          : value === "AlphabeticalOrder"
          ? FilteredMovies.sort((a, b) => a.title.localeCompare(b.title)).map(
              (movie, index) => {
                return (
                  <Movie
                    key={index}
                    setIsFavorited={setIsFavorited}
                    handleClick={handleClick}
                    {...movie}
                  />
                );
              }
            )
          : FilteredMovies.filter(
              (movie, index) => FilteredMovies.indexOf(movie) === index
            ).map((movie, index) => {
              return (
                <Movie
                  key={index}
                  setIsFavorited={setIsFavorited}
                  handleClick={handleClick}
                  {...movie}
                />
              );
            })}
        )
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
