import "./ExploreMenu.css";
import { useState, useEffect, useContext } from "react";
import { menu_list } from "../../assets/food_del/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = ({ category, setCategory, setFilteredData }) => {
  const { food_list } = useContext(StoreContext);
  const {search, setSearch} = useContext(StoreContext)
  useEffect(() => {
    let results = food_list;

    // Search filter only saves data
    if (search.trim() !== "") {
      results = results.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter only saves data
    if (category !== "Menu") {
      results = results.filter(item => item.menu_name === category);
    }

    // Send results to parent
    if (typeof setFilteredData === "function") {
      setFilteredData(results);
    }

  }, [search, category]);

  return (
    <section className="explore-menu-section" id="explore-menu">
      <div className="explore-menu-container">
        <div className="explore-menu-header">
          <h1>Explore Our Menu</h1>
          <p className="menu-description">
            Choose from a diverse menu featuring a delectable array of dishes. 
            Our mission is to satisfy your cravings and elevate your dining experience.
          </p>
        </div>
        
        <div className="menu-items-container">

          {/* Search bar */}
          <div className="searchBar">
            <input 
              type="text" 
              placeholder="Search.." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* UI stays EXACTLY the same */}
          <div className="menu-items-scroll">
            {menu_list.map((item, index) => (
              <div 
                key={index} 
                className={`menu-item ${category === item.menu_name ? "active" : ""}`}
                onClick={() => 
                  setCategory(prev => prev === item.menu_name ? "Menu" : item.menu_name)
                }
              >
                <div className="menu-item-image-container">
                  <img src={item.menu_image} alt={item.menu_name} />
                </div>
                <p className="menu-item-name">{item.menu_name}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="menu-divider"></div>
      </div>
    </section>
  )
};

export default ExploreMenu;
