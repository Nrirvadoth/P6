import { ReactComponent as Star } from '../assets/img/star.svg'

function Rating({ score }) {
  let content = []
  const starActive = `star star-active`
  const starInactive = `star star-inactive`

  for (let i = 0; i < 5; i++) {
    if (i < score) {
      content.push(true)
    } else {
      content.push(false)
    }
  }

  return (
    <div className="rating">
      {content.map((isActive) =>
        isActive === true ? (
          <Star className={starActive} />
        ) : (
          <Star className={starInactive} />
        ),
      )}
    </div>
  )
}

export default Rating
