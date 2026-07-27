export function getFavorites() {
  // localStorage.getItem("favorites") дает строку
  const favorites = localStorage.getItem("favorites");
  // но реакту нужен обьект поэтому преобразуем его - JSON.parse
  return favorites ? JSON.parse(favorites) : [];
}

export function saveFavorites(favorites)
// сохраниение обратно в строку в localStorage тк хранит только строки. 
{
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
// добавление удаления из избранного
export function removeFavorite(id) {
  const favorites = getFavorites();

  const updatedFavorites = favorites.filter(
    (movie) => movie.id !== id
  );

  saveFavorites(updatedFavorites);
}