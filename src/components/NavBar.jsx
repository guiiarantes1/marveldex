import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
   <nav className="navMenu">
    <ul>
        <li>
            <Link to={`/`} className="linkHome">Heróis</Link>
        </li>
        <li>
            <Link to={`/favorites`} className="linkFavoritos">Favoritos</Link>
        </li>
    </ul>
   </nav>
  )
}

export default NavBar