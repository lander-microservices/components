import React, { useEffect, useState } from "react";
import "./index.scss";
import { Rating } from "./Ratings/Ratings";

const Testimonials1 = ({
  content_block,
  prelander_testimonial_paragraph,
  prelander_testimonial_headline,
}) => {
  const { prelander_testimonial_list } = content_block;

  const filterOutData = (testimonials) => {
    const newData = testimonials.map((i) => {
      return {
        head: i.testimonial_author_headline,
        body: i.testimonial_author_paragraph,
        name: i.testimonial_author_name,
      };
    });
    return newData;
  };
  return (
    <div className={`main  ${content_block.prelander_testimonial_bg_color}`}>
      <div className="container">
        <div className={`row`}>
          {prelander_testimonial_list &&
          prelander_testimonial_list.length > 0 ? (
            <Rating
              prelander_testimonial_bg_color={
                content_block.prelander_testimonial_bg_color
              }
              prelander_testimonial_headline_color={
                content_block.prelander_testimonial_headline_color
              }
              prelander_testimonial_paragraph_color={
                content_block.prelander_testimonial_paragraph_color
              }
              prelander_testimonial_paragraph={prelander_testimonial_paragraph}
              prelander_testimonial_headline={prelander_testimonial_headline}
              rc={filterOutData(prelander_testimonial_list)}
            />
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
