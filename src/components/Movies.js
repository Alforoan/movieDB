import React from "react";

import Movie from "./Movie";

const Movies = ({ movies }) => {
  const [infoClicked, setInfoClicked] = React.useState(false);
  const [isFavorited, setIsFavorited] = React.useState([]);
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
    <div>
      {movies.map((movie, index) => {
        return (
          <Movie
            setIsFavorited={setIsFavorited}
            handleClick={handleClick}
            key={index}
            {...movie}
          />
        );
      })}
    </div>
  );
};

export default Movies;
