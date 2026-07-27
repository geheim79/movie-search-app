import { useEffect, useState } from "react";
import { getFavorites } from "../../services/favoriteService";
import MovieCard from "../../components/Header/MovieCard";
// импорт функции удаления из избранного
import { removeFavorite } from "../../services/favoriteService";


function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedMovies = getFavorites();

    setFavorites(savedMovies);
  }, []);


  function handleRemove(id) {
    removeFavorite(id);

    setFavorites(getFavorites());
  }


  return (
    <div>
      <h1>Избранные фильмы</h1>

      {favorites.map((movie) => (
        <div key={movie.id}>

          <MovieCard movie={movie} />

          <button onClick={() => handleRemove(movie.id)}>
            ❌ Удалить
          </button>

        </div>
      ))}

    </div>
  );
}

export default Favorites;
