import { NavLink } from "react-router-dom";
import "./Header.css";
function Header({ searchTerm, setSearchTerm }) {
  return (
    <header>
      <div className="logo">
        <img src="Er_was_eens_Logo.png" alt="Er was eens logo" />
      </div>
      <div className="header-right">
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/making-of/ramon-de-raes-de-wolf-en-de-3-biggetjes" className={({ isActive }) => (isActive ? "active" : "")}>
                Making-Of
              </NavLink>
            </li>
          </ul>
        </nav>
        <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search for topics or students" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
