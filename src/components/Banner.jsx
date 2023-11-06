import '../styles/banner.css'

function Banner({imageUrl, text}) {
  return (
    <div className="banner">
      <img src={imageUrl} alt="" />
      {text && (<h2 className="banner-title">{text}</h2>)}
    </div>
  )
}

export default Banner
