import { NavLink } from "react-router";

function NavLinks() {
  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        ARRD Shopping Complex 
      </NavLink>

      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home  
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default NavLinks;