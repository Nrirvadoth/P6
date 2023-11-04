import logo from '../assets/img/kasa-logo.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link>
                <Link to="/location">Lieu</Link>
            </nav>
            <img src={logo} alt="Kaza logo"></img>
            <h2>Header</h2>
        </div>
    )
}

export default Header