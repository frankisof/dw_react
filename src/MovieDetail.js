import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null; // Si no hay película seleccionada, no muestra nada

  return (
    <div className="movie-detail-overlay">
      <div className="movie-detail-container">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>{movie.title}</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src={movie.videoUrl}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
