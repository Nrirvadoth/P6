import { useParams } from 'react-router-dom'
import data from '../../data/accomodations.json'
import { Navigate } from 'react-router-dom'
import Slideshow from '../../components/Slideshow'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import '../../styles/accomodation.css'

function Accomodation() {
  const { locationId } = useParams()
  const accomodationList = data

  const accomodationData = accomodationList.find(
    (location) => location.id === locationId,
  )

  if (!accomodationData) {
    return <Navigate to="/404" />
  }

  return (
    <div>
      <Slideshow
        picturesList={accomodationData.pictures}
        length={accomodationData.pictures.length}
      />
      <div className="infos">
        <div className="accomodation-infos">
          <h2 className="accomodation-title">{accomodationData.title}</h2>
          <h3 className="accomodation-location">{accomodationData.location}</h3>
          <Tags tags={accomodationData.tags} accId={accomodationData.id} />
        </div>
        <div className="host-and-rating">
          <div className="host-infos">
            <p className="host-name">{accomodationData.host.name}</p>
            <img
              className="host-picture"
              src={accomodationData.host.picture}
              alt="host"
              width="64"
              height="64"
            />
          </div>
          <Rating score={accomodationData.rating} />
        </div>
      </div>
      <div className="desc-and-equipments">
        <Collapse title="Description" content={accomodationData.description} className="description"/>
        <Collapse title="Equipements" content={accomodationData.equipments} className="equipments"/>
      </div>
    </div>
  )
}

export default Accomodation
