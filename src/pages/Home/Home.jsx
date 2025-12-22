import "./Home.css";
import Header from '../../Components/Navbar/Header/Header';
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";
import HomeBody from "../HomeBody/HomeBody";

const Home = () => {
  const [category, setCategory] = useState("Menu");

  return (
    <div className="home-container">
      <Header />
      <main className="home-main-content">
        <HomeBody />
        {/* <AppDownload /> */}
      </main>
    </div>
  )
}

export default Home;