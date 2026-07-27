import { useState, useEffect } from "react";
import { searchMovies } from "../../services/movieService";
import MovieCard from "../../components/Header/MovieCard";
// Подключение стилей из Home css
import "./Home.css";

function Home() {
  // Состояние для списка фильмов
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  console.log(page);
  // Состояние для строки поиска
  const [query, setQuery] = useState("");
  // ожидание загрузки стриницы при медл нете
  const [loading, setLoading] = useState(false);
  // новое состояние ошибки
  const [error, setError] = useState("");

  // Асинхронная функция загрузки фильмов
  async function loadMovies(searchQuery, currentPage = page) {
    setLoading(true);
    setError("");

    try {
      const fetchedMovies = await searchMovies(searchQuery, currentPage);
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
    // проверка пустого поля если тектса нет - прекращаем выполнение
    if (!query.trim()) {
      return;
    }
    loadMovies(query, 1);
  }

  // При первом открытии страницы загружаем Batman
  useEffect(() => {
    loadMovies("Batman", page);
  }, [page]);

  return (
    <div>
      <h1>Главная страница</h1>
      {/* Изменение формы поиска */}
      <form className="search-form" onSubmit={handleSubmit}>
        <input
  className="search-input"
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Введите название фильма..."
/>

        <button type="submit">Найти</button>
      </form>
      {loading && <h2>Загрузка...</h2>}
      {error && <h2>{error}</h2>}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {/* функция пагинации */}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Назад
        </button>

        <span>Страница {page}</span>

        <button onClick={() => setPage(page + 1)}>Вперед</button>
      </div>
    </div>
  );
}

export default Home;
