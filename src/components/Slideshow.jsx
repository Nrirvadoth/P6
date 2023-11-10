import { useState } from 'react'
import leftArrow from '../assets/img/left-arrow.svg'
import rightArrow from '../assets/img/right-arrow.svg'

function Slideshow({ picturesList, length }) {
  const [currentImageIndex, setIndex] = useState(0)

  function next() {
    setIndex(currentImageIndex + 1)
    if (currentImageIndex === length - 1) {
      setIndex(0)
    }
  }

  function prev() {
    setIndex(currentImageIndex - 1)
    if (currentImageIndex === 0) {
      setIndex(length - 1)
    }
  }

  return (
    <div className="slideshow-container">
      <img className="slideshow-item" src={picturesList[currentImageIndex]} alt="" />
      {length > 1 && (
        <div className='slideshow-nav'>
          <img src={leftArrow} onClick={prev} alt=""/>
          <p className="counter">{currentImageIndex + 1} / {length}</p>
          <img src={rightArrow} onClick={next} alt=""/>
        </div>
      )}
    </div>
  )
}

export default Slideshow
