// импорт функции поиска из movieService.js
import { searchMovies } from "../../services/movieService";
import { useEffect } from "react";


function Home() {
    useEffect(() => {
  searchMovies("Batman");
}, []);
  return <h1>Главная страница</h1>;
}

export default Home;