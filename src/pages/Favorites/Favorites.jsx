import { useEffect, useState } from "react";
import { getFavorites } from "../../services/favoriteService";
import MovieCard from "../../components/Header/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
  const savedMovies = getFavorites();

  setFavorites(savedMovies);
}, []);
  return (
  <div>
    <h1>Избранные фильмы</h1>

    {favorites.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    ))}

  </div>
);
}

export default Favorites;
