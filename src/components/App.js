import React, { useState } from "react";
import {Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "../components/MoviesPage";

function App() {
  const [movies, setMovies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  console.log(movies)
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/movies">
          <MoviesPage movies={movies} />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
