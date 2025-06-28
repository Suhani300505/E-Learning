import './App.css'
import Banner from './Components/Banner/Banner'
import Banner2 from './Components/Banner/Banner2'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Service from './Components/Services/Service'
import Subscribe from './Components/Subscribe/Subscribe'
import './index.css'
function App() {

  return (
   <main className='overflow-x-hidden bg-white'>
    
    <Hero/>
    <Service/>
    <Banner/>
    <Subscribe/>
    <Banner2/>
    <Footer/>
   </main>
  )
}

export default App
