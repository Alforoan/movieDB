import React from "react";

import Movie from "./Movie";

const Movies = ({ movies }) => {
  const [infoClicked, setInfoClicked] = React.useState(false);

  return (
    <div>
      {movies.map((movie, index) => {
        return <Movie key={index} {...movie} />;
      })}
    </div>
  );
};

export default Movies;
