import '../styles/gallery.css'
import data from '../data/accomodations.json'
import GalleryItem from './GalleryItem'

const accomodationList = data

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
        </div>
    )
}

export default AccomodationGallery