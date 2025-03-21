import React, { useState } from "react";
import movi from "./movies/movi.json"; // Import JSON
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4">
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <img
          src={movie.Images}
          alt={movie.Title}
          className="w-full h-48 object-cover rounded-md"
          width={100}
          height={100}
        />
        <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
        <p className="text-gray-600">{movie.Genre}</p>
        <p className="text-gray-800">{movie.Year}</p>
      </div>
    </div>
  );
};

const Demo = () => {
  const [genre, setGenre] = useState("");
  const [yearRange, setYearRange] = useState([2009, 2025]);

  const filteredMovies = movi.filter((movie) => {
    const inGenre = genre ? movie.Genre.toLowerCase().includes(genre.toLowerCase()) : true;
    const inYearRange = movie.Year >= yearRange[0] && movie.Year <= yearRange[1];
    return inGenre && inYearRange;
  });

  return (
    <div className="container p-6">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Filter by genre..."
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="range"
        className="form-range mb-4"
        min="2009"
        max="2025"
        value={yearRange[0]}
        onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
      />
      <input
        type="range"
        className="form-range mb-4"
        min="2009"
        max="2025"
        value={yearRange[1]}
        onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
      />
      <p>Year Range: {yearRange[0]} - {yearRange[1]}</p>
      <div className="row">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Demo;
