// импорт библиотек маршрутизации
import { Routes, Route } from "react-router-dom";

// импорт компонент для страниц
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <div>
      <h1>Movie Search App</h1>
      {/* создание таблицы маршрутов */}
      <Routes>
        {/* прописываем пути для страниц */}
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
