import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Upcoming from './Upcoming'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css'
import Top_Rated from "./TopRated";
import WebSeries from "./WebSeries";
import PopularActor from "./PopularActor";

const Movie = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/top_rated" element={<Top_Rated />} />
                <Route path="/Web_series" element={<WebSeries />} />
                <Route path="/actor" element={<PopularActor />} />
                <Route path="*" element={<h1 style={{display:"flex", alignItems:"center"}}>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Movie