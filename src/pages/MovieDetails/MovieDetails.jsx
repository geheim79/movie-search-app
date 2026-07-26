import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../services/movieService";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(id);
      setMovie(data);
    }

    loadMovie();
  }, [id]);

  if (!movie) {
    return <h2>Загрузка...</h2>;
  }

  return (
  <div>

    <button onClick={() => navigate(-1)}>
      Назад
    </button>

    {movie.poster_path && (
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width="300"
      />
    )}

    <h1>{movie.title}</h1>

    <p>
      ⭐ Рейтинг: {movie.vote_average}
    </p>

    <p>
      📅 Дата выхода: {movie.release_date}
    </p>

    <p>
      Жанр:
      {movie.genres.map((genre) => (
        <span key={genre.id}>
          {" "}{genre.name}
        </span>
      ))}
    </p>

    <p>
      {movie.overview}
    </p>

  </div>
);
}

export default MovieDetails;
