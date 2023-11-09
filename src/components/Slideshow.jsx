function Slideshow({ picturesList, lenght }) {
  const { currentImageUrl, setImageUrl }
  return (
    <div className="accomodation-gallery-container">
      <img className="accomodation-gallery-item" src={picturesList[0]} alt="" />
    </div>
  )
}

export default Slideshow
