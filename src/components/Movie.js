import React from "react";
import Info from "./Info";

const Movie = ({
  id,
  adult,
  title,
  vote_average,
  poster_path,
  release_date,
}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const handleClick = () => {
    console.log("testing");
    setIsFavorite((prev) => !prev);
  };

  return (
    <article>
      <button onClick={() => setIsClicked((prev) => !prev)}>stuff</button>
      {isClicked ? (
        <Info isFavorite={isFavorite} handleClick={handleClick} />
      ) : (
        ""
      )}
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
};

export default Movie;
