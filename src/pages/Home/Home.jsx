// импорт функции поиска из movieService.js
import { searchMovies } from "../../services/movieService";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  // оборачиваем searchMovies в useEffect с параметром в виде пустого массива - рендер один раз
  useEffect(() => {
    // Делаем асинхронную функцию внутри useEffect
    async function loadMovies() {
      // вызов async функции searchMovies для поиска  с параметром Batman на главной странице с сохранением массива в переменной moviesData
      const fetchedMovies = await searchMovies("Batman");
      setMovies(fetchedMovies);
    }
    loadMovies();
  }, []);
}
return (
  <div>
    <h1>Главная страница</h1>
    {/* метод map для полученного массива movies кароточек фильмов */}
    {movies.map((movie) => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <p>⭐ Рейтинг: {movie.vote_average}</p>
        <p>{movie.overview}</p>
        <hr />
      </div>
    ))}
  </div>
);

export default Home;
