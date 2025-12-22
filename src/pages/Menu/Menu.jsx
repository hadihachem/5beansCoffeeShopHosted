import React, { useState } from 'react'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import "./Menu.css"

const Menu = () => {
    const [category, setCategory] = useState("Menu");
    const [filteredData, setFilteredData] = useState([]);

    return (
        <div className="Menu">
            <div className="Menu-overlay"></div>
            <main className="Menu-main-content">
                <ExploreMenu category={category} setCategory={setCategory} setFilteredData={setFilteredData} showAllDetails={true} />
                <FoodDisplay category={category} showAllDetails={true} filteredData={filteredData}/>
            </main>
        </div>
    )
}

export default Menu