import "./Footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="../Er_was_eens_Logo.png" alt="Er was eens logo" />
      </div>
      <div className="about">
        <h1>About Us</h1>
        <p>Welcome to a world where fairy tales scroll with depth. Through parallax magic, we bring front-end stories to life — one layer at a time.</p>
      </div>
      <div className="links">
        <h1>Links</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/making-of">Making-Of</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
