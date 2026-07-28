import { Link } from "react-router-dom";
// подключение стилизации
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Movie Search App</h1>

      <nav className="navigation">
        <Link className="nav-link" to="/">
          Главная
        </Link>

        <Link className="nav-link" to="/favorites">
          Избранное
        </Link>
      </nav>
    </header>
  );
}

export default Header;