import React from "react";

function RatingOrder({ handleHighLow, handleLowHigh }) {
  return (
    <div>
      <button onClick={handleHighLow}>By: Rating (high to low) </button>
      <button onClick={handleLowHigh}>By: Rating (low to high) </button>
    </div>
  );
}

export default RatingOrder;
