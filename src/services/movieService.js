// import axios from "axios";

// export function searchMovies(query) {

// }

import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
// экспорт функции поиска searchMovies
export async function searchMovies(query) {
  // вызываем библиотеку axios для отправки get запроса на сайт (в переменной BASE_URL )
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      language: "ru-RU",
      page: 1,
    },
  });

  console.log(response);
}
