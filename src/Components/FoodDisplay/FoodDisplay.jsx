import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, filteredData }) => {
  const { food_list } = useContext(StoreContext);
  


  const displayList =
    filteredData && filteredData.length > 0
      ? filteredData
      : category === "Menu"
      ? food_list
      : food_list.filter((item) => item.category === category);
  return (
    <div className="food-display" id="food-display">
      <h2>{`Our ${category}`}</h2>

      <div className="food-display-list">
        {displayList.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
