import  { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./Components/Footer/Footer"
import './App.css'
import About from "./pages/About/About"
import NotFound from "./Components/NotFound/NotFound"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import Location from "./Components/Location/Location"
const App = () => {

  const [showLogin, setShowLogin]= useState(false);

  return (
    <>
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About />}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/location" element={<Location />} />
      </Routes>

    </div>
    <Footer />
    </>
    
  )
}

export default App