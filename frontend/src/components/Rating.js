import React from "react";

function Rating({ rating, numReviews, color }) {
  return (
    <div>
      <i
        className={
          rating >= 1
            ? "fas fa-star"
            : rating >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color }}
      ></i>
      <i
        className={
          rating >= 2
            ? "fas fa-star"
            : rating >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color }}
      ></i>
      <i
        className={
          rating >= 3
            ? "fas fa-star"
            : rating >= 2.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color }}
      ></i>
      <i
        className={
          rating >= 4
            ? "fas fa-star"
            : rating >= 3.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color }}
      ></i>
      <i
        className={
          rating >= 5
            ? "fas fa-star"
            : rating >= 4.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color }}
      ></i>
      <span className="px-2">{numReviews && numReviews}</span>
    </div>
  );
}

export default Rating;
