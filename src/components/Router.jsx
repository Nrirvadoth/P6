import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Accomodation from '../pages/Accomodation'
import About from '../pages/About'
import Error404 from '../pages/Error404'
import Header from './Header'
import Footer from './Footer'

function Router() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:locationId" element={<Accomodation />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
