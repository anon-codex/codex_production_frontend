import React from 'react'
import Linkdin from './pages/Linkdin'
import Instadow from './pages/Instadow'
import Pindow from './pages/Pindow'
import Footer from './components/Footer'
import Dmca from './pages/Dmca'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About'
import TermsOfService from './pages/TermsOfService'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
const App = () => {
	
  return (
    <div>
	<Navbar />
   	 <Routes>
	<Route path='/' element={<Instadow />}  />
	<Route path='/linkedow' element={<Linkdin />}  />
	<Route path='/pindow' element={<Pindow />}  />

	 <Route path='/about' element={<About />}  />
	 <Route path='/dmca' element={<Dmca />}  />
	  <Route path='/privacy-policy' element={<PrivacyPolicy />}  />
	  <Route path='/terms-of-service' element={<TermsOfService />}  />
	  <Route path='/contact' element={<Contact />}  />



	</Routes> 
    <Footer />
    </div>
  )
}

export default App