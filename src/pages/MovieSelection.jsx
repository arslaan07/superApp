import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MovieChip from '../components/MovieChip';
import MovieBox from '../components/MovieBox';

const MOVIES = [
    {
      id: 0,
      movie: "Action",
    },
    {
      id: 1,
      movie: "Drama",
    },
    {
      id: 2,
      movie: "Romance",
    },
    {
      id: 3,
      movie: "Thriller",
    },
    {
      id: 4,
      movie: "Horror",
    },
    {
      id: 5,
      movie: "Western",
    },
    {
      id: 6,
      movie: "Fantasy",
    },
    {
      id: 7,
      movie: "Fiction",
    },
    {
      id: 8,
      movie: "Music",
    },
  ];

const MovieSelection = () => {
    const [selectedMovies, setSelectedMovies] = useState([])
    const navigate = useNavigate()
    
      const moveNext = () => {

      }
  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)"
      }}>
        {
            MOVIES.map(category => (
                <div key={category.id}>
                    <MovieBox />
                </div>
            ))
        }
      </div>
      {selectedMovies.length < 3 && (
        <p style={{color:"red"}}>Please select atleast 3 movies</p>
      )}
      <div>
        {
            selectedMovies.map(movie => (
                <p key={movie.id}>
                    <MovieChip />
                </p>
            ))
        }
      </div>
      <button onClick={moveNext}>Next</button>
    </div>
  )
}

export default MovieSelection
