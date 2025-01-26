import React, { useState } from "react";
import "./Gallerie.css";
import Breadcrumb from "./Breadcrumb";

const Gallerie = () => {
  const images = [
    { src: "/assets/amir-event-location-01.jpg", alt: "Event 1" },
    { src: "/assets/amir-event-location-02.jpg", alt: "Event 2" },
    { src: "/assets/amir-event-location-09.jpg", alt: "Event 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="Gallerie">
      <Breadcrumb />
      <h2>Galerie</h2>
      <div className="gallery-container">
        <button className="arrow prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="main-image-container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="main-image"
          />
        </div>
        <button className="arrow next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`thumbnail ${
              index === currentIndex ? "active-thumbnail" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallerie;
