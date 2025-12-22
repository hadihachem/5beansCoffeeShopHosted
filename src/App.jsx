import  { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Order from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./Components/Footer/Footer"
import LoginPopup from "./Components/LoginPopup/LoginPopup"
import Verify from "./pages/Verify/Verify"
import MyOrders from "./pages/MyOrders/MyOrders"
import './App.css'
import About from "./pages/About/About"
import AutomationSettings from "./pages/AutomationSettings/AutomationSettings"
import Feedback from "./pages/Feedback/Feedback"
import Menu from "./pages/Menu/Menu"
import NotFound from "./Components/NotFound/NotFound"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import Location from "./Components/Location/Location"
import ChatBot from "./Components/ChatBot/ChatBot"
const App = () => {

  const [showLogin, setShowLogin]= useState(false);

  return (
    <>
    {/* {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} */}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        {/* <Route path="/menu" element={ <Menu/>}/> */}
        {/* <Route path="/cart" element={ <Cart />}/> */}
        <Route path="/about" element={ <About />}/>
        <Route path="/feedback" element={ <Feedback />} ></Route>
        {/* <Route path="/order" element={ <Order />}/> */}
        {/* <Route path="/verify" element={<Verify />}></Route> */}
        {/* <Route path="/myorders" element={<MyOrders/>} ></Route> */}
        {/* <Route path="/automation-settings" element={<AutomationSettings />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/location" element={<Location />} />
      </Routes>

    </div>
    <Footer />
    {/* <ChatBot/> */}
    </>
    
  )
}

export default App