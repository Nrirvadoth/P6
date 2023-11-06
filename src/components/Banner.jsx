import '../styles/banner.css'
import landscape1 from '../assets/img/landscape1.jpg'

const title = 'Chez vous, partout et ailleurs'

function Banner() {
  return (
    <div className="banner">
      <img src={landscape1} alt="" />
      <h2 className="banner-title">{title}</h2>
    </div>
  )
}

export default Banner
