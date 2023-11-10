import { Link } from 'react-router-dom'

function GalleryItem({ image, title, id }) {
  return (
    <Link to={`/location/${id}`} className="gallery-item">
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
    </Link>
  )
}

export default GalleryItem
