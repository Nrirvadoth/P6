import '../styles/Gallery.css'
import data from '../data/accomodations.json'
import GalleryItem from './GalleryItem'

const accomodationList = data
const acclenght = (3 - (accomodationList.length % 3))

function AccomodationGallery() {

    return(
        <div className='gallery-container'>
            {accomodationList.map((accomodation) =>
            <GalleryItem 
                key = {`accomodation-${accomodation.id}`}
                image = {accomodation.cover}
                title = {accomodation.title}
                id = {accomodation.id}
            />
            )}
            {acclenght > 0 && (<div className='gallery-item hide'></div>)}
            {acclenght > 1 && (<div className='gallery-item hide'></div>)}
        </div>
    )
}

export default AccomodationGallery