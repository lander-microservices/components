import React from "react";
// const star5 = "/assets/images/ratings/5star.svg";

export const RatingCard = ({ head, body, name }) => {
  return (
    <div className="rating-card text-align-center">
      <img
        src="https://magenta-rugelach-af2962.netlify.app/assets/images/ratings/5star.svg"
        alt="5 star"
      />

      <div className="blue rating-headline">{head}</div>

      <div className="gray rating-paragraph">{body}</div>

      <div className="gray rating-paragraph">{name}</div>
    </div>
  );
};
