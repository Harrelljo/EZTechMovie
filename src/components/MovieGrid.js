import { Link } from 'react-router-dom';

const movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5', 'Movie 6'];

function MovieGrid() {
  return (
    <div>
      <h1>Welcome to EZTech Movie</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <Link key={index} to={`/movie/${index + 1}`}>
            <div className="movie">{movie}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
