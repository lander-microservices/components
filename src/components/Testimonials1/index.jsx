import React, { useEffect, useState } from "react";
import "./index.scss";
import { Rating } from "./Ratings/Ratings";

const Testimonials1 = ({ content_block,  getContent }) => {

  const [testimonials, setTestimonials] = useState([])

  const fetchContent = async () =>{
    const data = await getContent();
    setTestimonials(data.stories);
  }
  useEffect(() => {
    fetchContent();
  }, []);

  const filterOutData = (testimonials) => {
    console.log("testimonials1", testimonials)
    const newData = testimonials.map((i) => {
      return {
        head: i.content.testimonial_author_headline,
        body: i.content.testimonial_author_paragraph,
        name: i.content.testimonial_author_name,
      };
    });
    console.log("testimonials2", testimonials)
    return newData
  };

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          {testimonials.length > 0 ? (
            <Rating rc={filterOutData(testimonials)} />
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default Testimonials1;
