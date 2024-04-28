import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
   <nav className="navMenu">
    <NavLink to={`/`} className="linkHome">Heróis</NavLink>
    <NavLink to={`/favorites`} className="linkFavoritos">Favoritos</NavLink>
   </nav>
  )
}

export default NavBar