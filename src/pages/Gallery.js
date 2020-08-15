import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="videos-wrapper">
        <iframe
          title="wishes"
          src="https://www.youtube.com/embed/yW5lua2CA1Q"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="videos-wrapper">
        <iframe
          title="wishes"
          src="https://www.youtube.com/embed/nwtYS1qFluY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Gallery;
