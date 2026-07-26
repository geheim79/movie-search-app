function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div>
      {movie.poster_path && (
        <img
          src={imageUrl}
          alt={movie.title}
          width="200"
        />
      )}

      <h2>{movie.title}</h2>
      <p>⭐ Рейтинг: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <hr />
    </div>
  );
}

export default MovieCard;