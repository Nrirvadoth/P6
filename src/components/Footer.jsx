import '../styles/Footer.css'
import logoWhite from '../assets/img/kasa-logo-white.svg'

function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} width="120" alt="Kaza logo blanc" />
      <p className="footer-text">© 2020 Kaza. All rights reserved</p>
    </div>
  )
}

export default Footer
