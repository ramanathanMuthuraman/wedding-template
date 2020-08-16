import React from "react";
import { GALLERY_ITEMS } from "../constants";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      {GALLERY_ITEMS.map((url) => {
        return (
          <div className="videos-wrapper">
            <iframe
              title="wishes"
              src={url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
