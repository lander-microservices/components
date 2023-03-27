import React from "react";
// const star5 = "/assets/images/ratings/5star.svg";

export const RatingCard = ({ head, body, name, prelander_testimonial_bg_color }) => {
  return (
    <div className={`rating-card bg-white text-align-center ${prelander_testimonial_bg_color}`}>
      <img
        src="https://image-storage-wecallmedia.netlify.app/assets/images/ratings/5star.svg"
        alt="5 star"
      />

      <div className="blue rating-headline">{head}</div>

      <div className="gray rating-paragraph">{body}</div>

      <div className="gray rating-paragraph">{name}</div>
    </div>
  );
};