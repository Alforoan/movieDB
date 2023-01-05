import React from "react";
// import Info from "./Info";

const Movie = ({
  id,
  adult,
  title,
  vote_average,
  poster_path,
  release_date,
  handleClick,
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  function Info({ isFavorite }) {
    return (
      <main>
        <button onClick={() => handleClick(id)}>
          {isFavorite ? "favorite" : "not favorite"}
        </button>
        <button>Watchlist</button>
      </main>
    );
  }

  return (
    <article>
      <button onClick={() => setIsClicked((prev) => !prev)}>stuff</button>
      {isClicked ? <Info /> : ""}
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