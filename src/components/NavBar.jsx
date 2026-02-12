import { NavLink, Link } from "react-router-dom";
import {ShoppingCart} from 'lucide-react'


function NavBar() {

  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " active fw-semibold" : " text-secondary");
  return(
     <nav className="navbar navbar-expand-lg sticky-top glass border-bottom">
      <div className="container py-2">

        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-gradient">Product Catalog</span>
          <span className="ms-2 badge badge-soft rounded-pill align-middle code-pill">
           <ShoppingCart />
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

         <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink className={linkClass} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/Products">
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
     </nav>
  )

}
export default NavBar;