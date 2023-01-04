import React from "react";
import Info from "./Info";

const Movies = ({ movies }) => {
  const [infoClicked, setInfoClicked] = React.useState(false);
  const handleClick = (index) => {
    // let specificMovie = movies.filter(movies.index === index);
    console.log(infoClicked);
    if (movies.title === specificMovie.title) {
      setInfoClicked((prev) => !prev);
    }
  };

  return (
    <div>
      {movies.map((movie, index) => {
        const { adult, title, vote_average, poster_path, release_date } = movie;
        return (
          <article key={index}>
            <button onClick={handleClick}>stuff</button>
            {infoClicked ? <Info /> : ""}
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              <p>{vote_average}</p>
              <h2>{title}</h2>
              <p>{release_date}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Movies;
