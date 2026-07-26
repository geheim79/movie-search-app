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

  // Асинхронная функция загрузки фильмов
  async function loadMovies(searchQuery) {
    setLoading(true);
    setError("");

    try {
      const fetchedMovies = await searchMovies(searchQuery);
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
      setError("Не удалось загрузить фильмы.");
    } finally {
      setLoading(false);
    }
  }
  // обработчик подтверждения  по энтер
  function handleSubmit(event) {
    event.preventDefault();

    loadMovies(query);
  }

  // При первом открытии страницы загружаем Batman
  useEffect(() => {
    loadMovies("Batman");
  }, []);

  return (
    <div>
      <h1>Главная страница</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите название фильма..."
        />

        <button type="submit">Найти</button>
      </form>
      {loading && <h2>Загрузка...</h2>}
      {error && <h2>{error}</h2>}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
