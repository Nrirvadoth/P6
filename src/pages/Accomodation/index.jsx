import { useParams } from 'react-router-dom'
import data from '../../data/accomodations.json'
import  { Navigate } from 'react-router-dom'


function Accomodation() {
  const { locationId } = useParams()
  const accomodationList = data
  console.log({ locationId })
  console.log({ accomodationList })

  const accomodationData = accomodationList.find(
    (location) => location.id === locationId
  )
  
  if (!accomodationData) {
    return <Navigate to='/404' />
  } 

  return (
    <div>
    <h2>{accomodationData.title}</h2>
    <img src={accomodationData.cover} />
    <p>{accomodationData.description}</p>
    <h3>{accomodationData.location}</h3>
    </div>
  )
}


export default Accomodation
