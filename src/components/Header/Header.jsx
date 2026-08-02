import { NavLink } from "react-router-dom";
// подключение стилизации
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Movie Search App by Geheim_79(Alex)</h1>

      <nav className="navigation">
        <NavLink
  to="/"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Главная
</NavLink>

<NavLink
  to="/favorites"
  className={({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"
  }
>
  Избранное
</NavLink>
      </nav>
    </header>
  );
}

export default Header;