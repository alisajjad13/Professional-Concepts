import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carousel/Carousel'
import Albums from './Components/Albums/Albums'
import Chart from './Components/Chart/Chart'
import Playlist from './Components/Playlist/Playlist'
import Carousel2 from './Components/Carousel2/Carousel2'
import Artist from './Components/Artist/Artist'
import Testimonials from './Components/Testimonials/Testimonials'
import News from './Components/News/News'
import Genres from './Components/Genres/Genres'
import Footer from './Components/Footer/Footer'
import Playbar from './Components/Playbar/Playbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Carousel/>
     <Albums/>
     <Chart/>
     <Playlist/>
     <Carousel2/>
     <Artist/>
     <Testimonials/>
     <News/>
     <Genres/>
     <Footer/>
     <Playbar/>
    </>
  )
}

export default App
