import { Link } from 'react-router-dom'
import '../styles/error.css'

function Error() {
  return (
    <div className="error404">
      <p className="error-number">404</p>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="prev-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
