import React from "react";

function Info({ handleClick, isFavorite }) {
  const [favorite, setFavorite] = React.useState([]);

  return (
    <main>
      <button onClick={handleClick}>
        {isFavorite ? "favorite" : "not favorite"}
      </button>
      <button>Watchlist</button>
    </main>
  );
}

export default Info;
