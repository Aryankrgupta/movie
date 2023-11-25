import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Carousel from './MovieCarousel'
import React, { useEffect, useState } from 'react';
import { UserCard } from 'react-ui-cards';
import YouTube from 'react-youtube';



const WebSeries = () => {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState("")
    const [searchData, setSearchData] = useState("")
    const [moiveId, setMoiveId] = useState([])
    const [mTrailer, setMTrailer] = useState(false)
  
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=f1c02c911183ebf7cd75dfc324da8315&language=en-US&page=1%27%20')
        .then(res => res.json())
        .then((d) => setMovie(d.results))
    },[])
    // console.log(movie);
    function searching() {
      fetch(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=f1c02c911183ebf7cd75dfc324da8315`)
    .then(res => res.json())
    .then((data) => setMovie(data.results))
    }
    const trailer = (id) => {
      // setMTrailer(false);
      fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=f1c02c911183ebf7cd75dfc324da8315&include_video_language=en,fr,es,de,pt`)
    .then(res => res.json())
    .then((d) => {
      setMoiveId(d.results[0].key);
      setMTrailer(true);
    })
      // console.log(id);
      // console.log(moiveId);
    }
    const carouselChange = (e) => {
      console.log(e);
      
    }
    // console.log(searchData);
  return (
    <div className='home'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/upcoming">Upcoming</Nav.Link>
            <Nav.Link href="/top_rated">Top Rated</Nav.Link>
            <Nav.Link href="/Web_series">Web Series</Nav.Link>
            <Nav.Link href="/actor">Actor</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={searching}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    <Carousel api = {movie} title = {movie.original_name} trailer ={trailer} mTrailer = {mTrailer} moiveId = {moiveId} carid = {carouselChange}/>

    {mTrailer ? <YouTube className='yt' videoId={moiveId} /> : ""}
    
    <div className="mCard">
    {movie && movie.map((e) => {
      return (
         <div className='card' key={e.id}>
          <img src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`} alt="" />
          <h3>{e.original_name}</h3>
          <p>{e.overview}</p>
          <Button className='btn' onClick={() => trailer(`${e.id}`)}>Trailer</Button>
        </div>
      )
    })}
    
    </div>

    </div>
  )
}

export default WebSeries
