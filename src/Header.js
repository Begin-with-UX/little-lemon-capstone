import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Link to="/" aria-label="Go to homepage">
        <img src={logo} alt="Little Lemon Logo" className="site-logo" />
      </Link>

      <button
        className="hamburger-button"
        aria-label="On Click"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <nav
        id="main-navigation"
        className={`main-nav ${isMenuOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
          <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
          <li><Link to="/order" onClick={closeMenu}>Order Online</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;