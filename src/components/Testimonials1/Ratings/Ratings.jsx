import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RatingCard } from "./RatingCard/RatingCard";
import { Carousel } from "react-configurable-carousel";

// const trustpilot = "/assets/images/ratings/trustpilot.svg";
// const star5 = "/assets/images/ratings/5star.svg";

export const Rating = ({ rc, prelander_testimonial_headline, prelander_testimonial_paragraph, prelander_testimonial_bg_color }) => {

  const slicksettings = {
    arrows: false,
    dotsNavigation: false,
    carouselStyle: "3d",
    width: "100%",
    height: "100%",
    autoScrollInterval: 3000,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="rating col text-align-center">
      <div className="rating-head ">
        <div className="rating-headline blue" dangerouslySetInnerHTML={{ __html: prelander_testimonial_headline }} ></div>

        <div dangerouslySetInnerHTML={{ __html: prelander_testimonial_paragraph }} className="rating-paragraph gray">
        </div>
      </div>

      <div className="rating-card-holder">
        <Carousel {...slicksettings}>
          {rc.map((k, i) => {
            return (
              <div key={i}>
                <RatingCard
                  prelander_testimonial_bg_color={prelander_testimonial_bg_color}
                  head={k["head"]}
                  body={k["body"]}
                  name={k["name"]}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="review-head">
        <div className="gray first">Excellent</div>
        <img
          className="second"
          src="https://image-storage-wecallmedia.netlify.app/assets/images/ratings/5star.svg"
          alt="5 stars"
        />
        <div className="gray third">
          Based on 786 reviews
        </div>
        <div className="fourth">
          <img
            src="https://image-storage-wecallmedia.netlify.app/assets/images/ratings/trustpilot.svg"
            alt="Trust Pilot"
          />
        </div>
      </div>
    </div>
  );
};
