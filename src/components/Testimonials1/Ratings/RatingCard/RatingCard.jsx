import React from "react";
// const star5 = "/assets/images/ratings/5star.svg";

export const RatingCard = ({ head, body, name }) => {
  return (
    <div className="rating-card flex-a-cen-j-cen flex-d-col">
      <img
        src="https://magenta-rugelach-af2962.netlify.app/assets/images/ratings/5star.svg"
        alt="5 star"
      />

      <div className="font-24 bold color-primary rating-card1">{head}</div>

      <div className="font-16 color-dark-grey rating-card2">{body}</div>

      <div className="font-16 color-dark-grey rating-card3">{name}</div>
    </div>
  );
};
