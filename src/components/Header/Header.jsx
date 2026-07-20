import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Movie Search App</h1>

      <nav>
        {/* Link меняет URL и говорит Router что адрес изменился */}
        <Link to="/">Главная</Link>{" | "}
        <Link to="/favorites">Избранное</Link>
      </nav>
    </header>
  );
}

export default Header;