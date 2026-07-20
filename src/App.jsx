// импорт библиотек маршрутизации
import { Routes, Route } from "react-router-dom";
// импорт компоненты Header
import Header from "./components/Header/Header";

// импорт компонент для страниц
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  console.log(import.meta.env);
  return (
    <div>
      <Header />
      {/* Routes - таблица маршрутов */}
      <Routes>
        {/*При каком URL какой  элемент React (те отрисованный React компонент) показать  */}
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
