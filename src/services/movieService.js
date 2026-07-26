// импорт библиотеки axios для работы с сетью

import axios from "axios";
// задание адреса url и импорт ключа API из .env
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// создание и экспорт асинхронной функции поиска searchMovies
export async function searchMovies(query) {
  //   вызываем библиотеку axios для отправки get запроса на сайт (в переменной BASE_URL )
  //   с ключом API и сохраниние обьекта в переменную response
  // также через await axios ждет получение данных от сервера
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
      language: "ru-RU",
      page: 1,
    },
  });
  // проверка получения ответа с сервера в консоли
  // console.log(response.data);
  return response.data.results;
}

export async function getMovieDetails(id) {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "ru-RU",
    },
  });

  return response.data;
}