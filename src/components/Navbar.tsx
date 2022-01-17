import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar__wrapper">
      <h1 className="page_title">DnD 5.0 Spellist</h1>
      <div className="links__wrapper">
        <Link to="/" className="navbar__link">
          Spell List
        </Link>
        <Link to="/fav" className="navbar__link">
          Favourites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
