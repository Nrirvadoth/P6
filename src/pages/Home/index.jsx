import Banner from '../../components/Banner'
import landscape1 from '../../assets/img/landscape1.jpg'
import AccomodationGallery from '../../components/Gallery'

const title = 'Chez vous, partout et ailleurs'

function App() {
  return (
    <div>
      <Banner imageUrl={landscape1} text={title} />
      <AccomodationGallery />
    </div>
  )
}

export default App
