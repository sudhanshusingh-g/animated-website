
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Game } from './components/Game'
import { Landingpage } from './components/Landingpage'
import Marquee from './components/Marquee'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import LocomotiveScroll from "locomotive-scroll";



const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-slate-100 min-h-screen w-full'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Game/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App