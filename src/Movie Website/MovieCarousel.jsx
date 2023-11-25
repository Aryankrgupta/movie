import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';
import React, { useState } from "react";

const MovieCarousel = ({api, trailer, movieId, carid}) => {
  const [id, setId] = useState("hello")
  function movieTrailer(id) {
    trailer(id)
  }
  function onCarouselChange(e) {
    let id = api[e].id
    console.log(id);
    trailer(id)
    
  }
  console.log(id);

  return (
    <div className="carousel-container">
      <Carousel className="carousel" onChange={onCarouselChange}>
        {api && api.map((e) => (
          <div key={e.id}  onChange={() => setId(e.id)}>
            <img src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`} alt={e.original_title}/>
            <p className="legend">
              <span className="title">{e.original_title}</span><br />
              <button className="btn" onClick={() => {
                movieTrailer(`${e.id}`)
              }}>Trailer</button>
            </p>
            
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
