import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RatingCard } from "./RatingCard/RatingCard";
import { Carousel } from "react-configurable-carousel";

// const trustpilot = "/assets/images/ratings/trustpilot.svg";
// const star5 = "/assets/images/ratings/5star.svg";

export const Rating = () => {
  const rc = [
    {
      head: "The Best",
      body: "My experience with your representative was top notch! They were very polite, very attentive to all of my questions, and made me confident that I was selecting the best plan for my needs.  He took his time explaining everything and knew his information extremely well!",
      name: "Jorge Pulido",
    },
    {
      head: "Knowledgeable & Personable",
      body: "Knowledgeable and personable. Worked through options quickly. We were enrolled within 48 hours of initial meeting. Thanks for your help, Don.",
      name: "Linda A.",
    },
    {
      head: "Very assuring & nice",
      body: "Very assuring and nice! Helped me throughout all my questions to help me choose a plan and understand the plan, my agents name was Tara McAlister! Thank you!",
      name: "Leslie Craven",
    },
    {
      head: "Helped Me Out With Insurance Decision",
      body: "Jeff Morningstar, did a very good job explaining all of my different options. Compared different plans, taking into account the different doctor's I visit and all the different medications I use to let me decide what plan that I wanted",
      name: "Daniel F.",
    },
    {
      head: "Leslie Gould was a great help",
      body: "I talked with a young man named Edis K. to finish my medicare sign-up process. He was amazing to work with on the phone. He walked me through stuff and spelled things out very clearly. He got me set up with just what I wanted: dental, vision and healthcare. Great guy!! Thanks again!",
      name: "Paula A.",
    },
    {
      head: "They were so helpful and patient",
      body: "Sheryl was so helpful and patient as she helped me navigate medicare plan options and find what is best.",
      name: "Maurice C.",
    },
    {
      head: "Matt Gardner was knowledgeable",
      body: "Matt Gardner was knowledgeable about the medicare marketplace and current insurance companies and 2022 plans. He was very helpful getting us the right policy to fit our needs and at the right price.",
      name: "Charlotta Whales",
    },
    {
      head: "Great Insurance Agent",
      body: "I talked with a young man named Edis K. to finish my medicare sign-up process. He was amazing to work with on the phone. He walked me through stuff and spelled things out very clearly. He got me set up with just what I wanted: dental, vision and healthcare. Great guy!! Thanks again!",
      name: "Donna L.",
    },
  ];

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
    <div className="rating col">
      <div className="rating-head ">
        <div className="rating-headline">What Our Customers Are Saying?</div>

        <div className="rating-paragraph">
          Here's what some of our thousands of customers over the years have to
          say!
        </div>
      </div>

      <div className="rating-card-holder">
        <Carousel {...slicksettings}>
          {rc.map((k, i) => {
            return (
              <div key={i}>
                <RatingCard
                  head={k["head"]}
                  body={k["body"]}
                  name={k["name"]}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="flex-a-cen-j-cen review-head">
        <div className="font-24 bold color-dark-grey first">Excellent</div>
        <img
          className="second"
          src="https://magenta-rugelach-af2962.netlify.app/assets/images/ratings/5star.svg"
          alt="5 stars"
        />
        <div className="font-16 color-dark-grey third">
          Based on 786 reviews
        </div>

        <div className="fourth">
          <img
            src="https://magenta-rugelach-af2962.netlify.app/assets/images/ratings/trustpilot.svg"
            alt="Trust Pilot"
          />
        </div>
      </div>
    </div>
  );
};
