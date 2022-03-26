import React from "react";

function Gallery(props) {
  return (
      <div className="gallery__item">
        <h4>{props.movieName}</h4>
        <div className="gallery__item--image">
          <img
            src={props.poster}
            alt={props.movieName}
          />
        </div></div>
  );
}

export default Gallery;
