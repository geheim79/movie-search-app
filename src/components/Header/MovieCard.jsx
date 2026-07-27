import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`} className="movie-link">
      <div className="movie-card">
        {movie.poster_path && (
          <img className="movie-poster" src={imageUrl} alt={movie.title} />
        )}

        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-rating">⭐ {movie.vote_average}</p>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
