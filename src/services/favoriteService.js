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
