import "./Home.css";
import Header from '../../Components/Navbar/Header/Header';
import { useState } from "react";

import HomeBody from "../HomeBody/HomeBody";

const Home = () => {
  const [category, setCategory] = useState("Menu");

  return (
    <div className="home-container">
      <Header />
      <main className="home-main-content">
        <HomeBody />
      </main>
    </div>
  )
}

export default Home;