import React, { useState } from "react";
// import image1 from "./images/image1.jpg";
// import image2 from "./images/image2.jpg";
// import image3 from "./images/image3.jpg";
// import image4 from "./images/image4.jpg";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Ronne Galle",
      role: "Project Manager",
      comment:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
      image:
        "https://d3nn873nee648n.cloudfront.net/1200x1800-new/19414/SM927791.jpg",
    },
    {
      name: "Missy Limana",
      role: "Engineer",
      comment:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
      image:
        "https://d3nn873nee648n.cloudfront.net/1200x1800-new/19414/SM927791.jpg",
    },
    {
      name: "Martha Brown",
      role: "Project Manager",
      comment:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
      image:
        "https://d3nn873nee648n.cloudfront.net/1200x1800-new/19414/SM927791.jpg",
    },
    {
      name: "Hanna Lisem",
      role: "Project Manager",
      comment:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
      image:
        "https://d3nn873nee648n.cloudfront.net/1200x1800-new/19414/SM927791.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gtco-testimonials">
      <h2>Testimonials Carousel - Cards Comments</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial ${index === activeIndex ? "active" : ""}`}
          >
            <div className="card text-center">
              <img className="card-img-top" src={testimonial.image} alt="" />
              <div className="card-body">
                <h5>
                  {testimonial.name} <br />
                  <span>{testimonial.role}</span>
                </h5>
                <p className="card-text">{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
