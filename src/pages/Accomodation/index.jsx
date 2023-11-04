import { useParams } from 'react-router-dom'
import data from '../../data/accomodations.json'


function Accomodation() {
  const { locationId } = useParams()
  const accomodationList = data
  console.log({ locationId })
  console.log({ accomodationList })

  const accomodationExists = accomodationList.find(
    (location) => location.id === locationId
  )
  console.log({ accomodationExists })

  return (
    
    <div>
      <h3>Lieu</h3>
      <div>
      <p>{locationId}</p>
      {accomodationExists ? (<p>Valide</p>) : (<p>Ce lieu n'existe pas</p>)} 
      </div>
    </div>
  )
}

export default Accomodation
