import logo from '../assets/img/kasa-logo.svg'
import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
  return (
    <header>
      <img src={logo} alt="Kaza logo"></img>
      <nav>
        <ul>
          <li key="navAccueil" ><Link to="/">Accueil</Link></li>
          <li key="navAbout" ><Link to="/a-propos">A propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
