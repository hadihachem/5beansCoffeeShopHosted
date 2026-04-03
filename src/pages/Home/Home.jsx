import "./Home.css";
import Header from '../../Components/Navbar/Header/Header';
import { useState } from "react";

import HomeBody from "../HomeBody/HomeBody";

const Home = () => {
  const [category, setCategory] = useState("Menu");

  return (
    <div className="home-container">
      <Header />
      <div className="happy-divider">
        <img
          src="https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/jmjs/5BeansCoffeeShop/What+Makes+%E2%80%A8You+Happy_.png"
          alt="What makes you happy"
        />
      </div>      <main className="home-main-content">
        <HomeBody />
      </main>
    </div>
  )
}

export default Home;