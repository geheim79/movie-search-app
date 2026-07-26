import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../services/movieService";

function MovieDetails() {
  const { id } = useParams();

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
      <h1>{movie.title}</h1>

      <p>
        ⭐ Рейтинг: {movie.vote_average}
      </p>

      <p>
        {movie.overview}
      </p>
    </div>
  );
}

export default MovieDetails;