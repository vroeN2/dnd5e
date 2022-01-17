import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>DnD 5.0 Spellist</h1>
      <div className="links">
        <Link to="/">Spell List</Link>
        <Link to="/fav">Favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
