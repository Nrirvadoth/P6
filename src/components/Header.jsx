import logo from '../assets/img/kasa-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import '../sass/Header.scss'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Kaza logo" id="logo"></img>
      </Link>
      <nav>
        <ul>
          <li key="navAccueil">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li key="navAbout">
            <NavLink to="/a-propos">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
