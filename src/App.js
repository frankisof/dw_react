import React, { useRef, useState } from 'react';
import './App.css';
import MovieDetail from './MovieDetail';

// Importar las imágenes para películas
import pelicula1 from './assets/peli1.jpeg';
import pelicula2 from './assets/peli2.jpeg';
import pelicula3 from './assets/peli3.jpeg';
import pelicula4 from './assets/peli4.jpeg';
import pelicula5 from './assets/peli5.jpeg';

// Importar las imágenes para series
import serie1 from './assets/serie1.jpeg';
import serie2 from './assets/serie2.jpeg';
import serie3 from './assets/serie3.jpeg';
import serie4 from './assets/serie4.jpeg';
import serie5 from './assets/serie5.jpeg';

// Importar las imágenes para música
import musica1 from './assets/musica1.jpeg';
import musica2 from './assets/musica2.jpeg';
import musica3 from './assets/musica3.jpeg';
import musica4 from './assets/musica4.jpeg';
import musica5 from './assets/musica5.jpeg';

// Arreglos de películas, series y música (tal como ya lo tienes)
const movies = [
  { title: "Furiosa", imageUrl: pelicula1, videoUrl: "https://www.youtube.com/watch?v=2OEGx_yIS6M", description: "La joven Furiosa es arrebatada del Paraje Verde de las Muchas Madres..." },
  { title: "Valiente", imageUrl: pelicula2, videoUrl: "https://www.youtube.com/watch?v=0t4uTlcsJl4", description: "Merida, la impetuosa y valiente hija de un rey escocés..." },
  { title: "John Wick", imageUrl: pelicula3, videoUrl: "https://www.youtube.com/watch?v=M7XM597XO94", description: "John Wick regresa de nuevo con una recompensa sobre su cabeza..." },
  { title: "Avatar", imageUrl: pelicula4, videoUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY", description: "En un exuberante planeta llamado Pandora viven los Na'vi..." },
  { title: "Anabelle", imageUrl: pelicula5, videoUrl: "https://www.youtube.com/watch?v=8kmLHwKH31M", description: "John Form encuentra el regalo perfecto para Mia..." }
];

const series = [
  { title: "Breaking Bad", imageUrl: serie1, videoUrl: "https://www.youtube.com/watch?v=HhesaQXLuRY", description: "Walter White, un profesor de química convertido en fabricante de metanfetaminas..." },
  { title: "Stranger Things", imageUrl: serie2, videoUrl: "https://www.youtube.com/watch?v=mnd7sFt5c3A", description: "Un grupo de niños se enfrenta a eventos sobrenaturales en su ciudad..." },
  { title: "The Witcher", imageUrl: serie3, videoUrl: "https://www.youtube.com/watch?v=cSqi-8kAMmM", description: "Geralt de Rivia, un cazador de monstruos solitario, lucha por encontrar su lugar..." },
  { title: "La Casa de Papel", imageUrl: serie4, videoUrl: "https://www.youtube.com/watch?v=_InqQJRqGW4", description: "Ocho ladrones toman rehenes en la Fábrica Nacional de Moneda y Timbre..." },
  { title: "The Mandalorian", imageUrl: serie5, videoUrl: "https://www.youtube.com/watch?v=aOC8E8z_ifw", description: "El Mandaloriano viaja por la galaxia en busca de trabajo y aventuras..." }
];

const music = [
  { title: "Bohemian Rhapsody", imageUrl: musica1, videoUrl: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ", description: "Una de las canciones más icónicas de la banda Queen..." },
  { title: "Thriller", imageUrl: musica2, videoUrl: "https://www.youtube.com/watch?v=sOnqjkJTMaA", description: "El famoso éxito de Michael Jackson con su icónico video musical..." },
  { title: "Hotel California", imageUrl: musica3, videoUrl: "https://www.youtube.com/watch?v=EqPtz5qN7HM", description: "Una de las canciones más conocidas de The Eagles..." },
  { title: "Imagine", imageUrl: musica4, videoUrl: "https://www.youtube.com/watch?v=YkgkThdzX-8", description: "El himno de paz de John Lennon..." },
  { title: "Stairway to Heaven", imageUrl: musica5, videoUrl: "https://www.youtube.com/watch?v=QkF3oxziUI4", description: "Un clásico del rock de Led Zeppelin..." }
];

function App() {
  const movieCatalogRef = useRef(null);
  const seriesCatalogRef = useRef(null);
  const musicCatalogRef = useRef(null);

  const [selectedItem, setSelectedItem] = useState(null); // Estado para el ítem seleccionado

  const scrollLeft = (catalogRef) => {
    catalogRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (catalogRef) => {
    catalogRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Actualiza el ítem seleccionado
  };

  const closeDetail = () => {
    setSelectedItem(null); // Cierra el detalle del ítem
  };

  // Funciones de scroll para los botones de la parte superior
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Botones de navegación en la parte superior */}
      <div className="navbar">
        <button onClick={() => scrollToSection(movieCatalogRef)}>Películas</button>
        <button onClick={() => scrollToSection(seriesCatalogRef)}>Series</button>
        <button onClick={() => scrollToSection(musicCatalogRef)}>Canciones</button>
      </div>

      <h1>Catálogo de Películas</h1>
      <div className="catalog-container">
        <button className="scroll-button left" onClick={() => scrollLeft(movieCatalogRef)}>
          ◀
        </button>
        <div className="movie-catalog" ref={movieCatalogRef}>
          {movies.map((movie, index) => (
            <div key={index} className="movie-card" onClick={() => handleItemClick(movie)}>
              <img src={movie.imageUrl} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(movieCatalogRef)}>
          ▶
        </button>
      </div>

      <h1>Catálogo de Series</h1>
      <div className="catalog-container">
        <button className="scroll-button left" onClick={() => scrollLeft(seriesCatalogRef)}>
          ◀
        </button>
        <div className="movie-catalog" ref={seriesCatalogRef}>
          {series.map((serie, index) => (
            <div key={index} className="movie-card" onClick={() => handleItemClick(serie)}>
              <img src={serie.imageUrl} alt={serie.title} />
              <h2>{serie.title}</h2>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(seriesCatalogRef)}>
          ▶
        </button>
      </div>

      <h1>Catálogo de Música</h1>
      <div className="catalog-container">
        <button className="scroll-button left" onClick={() => scrollLeft(musicCatalogRef)}>
          ◀
        </button>
        <div className="movie-catalog" ref={musicCatalogRef}>
          {music.map((song, index) => (
            <div key={index} className="movie-card" onClick={() => handleItemClick(song)}>
              <img src={song.imageUrl} alt={song.title} />
              <h2>{song.title}</h2>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(musicCatalogRef)}>
          ▶
        </button>
      </div>

      {/* Mostrar el detalle si hay un ítem seleccionado */}
      {selectedItem && (
        <MovieDetail movie={selectedItem} onClose={closeDetail} />
      )}
    </div>
  );
}

export default App;
