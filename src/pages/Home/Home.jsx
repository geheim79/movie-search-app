import { useState, useEffect } from "react";
import { searchMovies } from "../../services/movieService";
import MovieCard from "../../components/Header/MovieCard";

function Home() {
  // Состояние для списка фильмов
  const [movies, setMovies] = useState([]);

  // Состояние для строки поиска
  const [query, setQuery] = useState("");
  // ожидание загрузки стриницы при медл нете
  const [loading, setLoading] = useState(false);
  // новое состояние ошибки
  const [error, setError] = useState("");

  // Универсальная функция загрузки фильмов
async function loadMovies(searchQuery) {
  setLoading(true);

  try {
    const fetchedMovies = await searchMovies(searchQuery);
    setMovies(fetchedMovies);
  } catch (error) {
    console.error(error);
    alert("Не удалось загрузить фильмы.");
  } finally {
    setLoading(false);
  }
}

  // При первом открытии страницы загружаем Batman
  useEffect(() => {
    loadMovies("Batman");
  }, []);

  return (
    <div>
      <h1>Главная страница</h1>

      <input
        type="text"
        placeholder="Введите название фильма..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={() => loadMovies(query)}>Найти</button>
      {loading && <h2>Загрузка...</h2>}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
