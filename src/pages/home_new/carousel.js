import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./carousel.css"; // Custom styles

const images = [
  { src: "/image/Farewell.jpg", alt: "Slide 1", title: "Farewell" },
  { src: "/image/pg.jpeg", alt: "Slide 2", title: "Post Graduate Orientation" },
  { src: "/image/FreshersParty.JPG", alt: "Slide 3", title: "Freshers' Party" },
  { src: "/image/UG-Orientation.png", alt: "Slide 4", title: "Undergraduate Orientation" },
  { src: "/image/Department-trip.jpg", alt: "Slide 5", title: "Departmental Trip" },
  { src: "/image/labvisit.jpeg", alt: "Slide 6", title: "Lab Visit" },
];

const Carouselnew = () => {
  return (
    <div className="carousel-section">
      {/* 🔹 Events Heading */}
      <div className="carousel-heading">
        <h2>Events</h2>
        <div className="underline"></div>
      </div>
      <br/>

      {/* 🔹 Full-Screen Carousel */}
      <Splide
  options={{
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "20px",
    autoplay: true,
    interval: 3000,  // Auto-scroll every 3 seconds
    speed: 800,
    pauseOnHover: false, // Keep autoplay after hovering
    pauseOnFocus: false, // Keep autoplay after clicking
    resetProgress: false, // Prevent autoplay from stopping on interaction
    rewind: true, // Ensure smooth looping
    arrows: true,
    pagination: true,
    drag: true,
    breakpoints: {
      1200: { perPage: 2 },
      800: { perPage: 1 },
    },
  }}
>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="slide">
              <img src={image.src} alt={image.alt} className="slide-image" />
              <div className="slide-title">{image.title}</div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carouselnew;
