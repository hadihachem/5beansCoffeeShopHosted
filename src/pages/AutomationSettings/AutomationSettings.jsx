import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./AutomationSettings.css";
import { StoreContext } from "../../context/StoreContext";

const AutomationSettings = () => {
  const [enabled, setEnabled] = useState(false);
  const [schedule, setSchedule] = useState("daily");
  const [hour, setHour] = useState("00:00"); // New state for hour
  const [items, setItems] = useState([]);
  const { food_list, token } = useContext(StoreContext);

  useEffect(() => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/user/automation`, {
          headers: { token },
        })
        .then((response) => {
          const data = response.data.automationSettings;
          setEnabled(data.enabled || false);
          setSchedule(data.schedule || "daily");
          setHour(data.hour || "00:00");
          setItems(data.items || []);
        })
        .catch((error) =>
          console.error("Error fetching automation settings:", error)
        );
    } else {
      console.error("No token found");
    }
  }, [token]);

  const handleAutomationToggle = () => setEnabled(!enabled);
  const handleScheduleChange = (e) => setSchedule(e.target.value);
  const handleHourChange = (e) => setHour(e.target.value); // Update hour

  const handleItemSelection = (e, itemId) => {
    setItems((prevItems) =>
      prevItems.includes(itemId)
        ? prevItems.filter((id) => id !== itemId)
        : [...prevItems, itemId]
    );
  };

  const handleSaveSettings = () => {
    if (token) {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/api/user/update-automation`,
          { enabled, schedule, hour, items }, // Include hour
          {
            headers: { token },
          }
        )
        .then(() => alert("Settings saved successfully!"))
        .catch((error) => console.error("Error saving settings:", error));
    } else {
      console.error("No token found");
    }
  };

  return (
    <div className="automation-settings">
      <h2>Automation Settings</h2>
      <div>
        <label>
          Enable Automation:
          <input type="checkbox" checked={enabled} onChange={handleAutomationToggle} />
        </label>
      </div>
      <div>
        <label>
          Schedule:
          <select value={schedule} onChange={handleScheduleChange}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Time (HH:MM):
          <input
            type="time"
            value={hour}
            onChange={handleHourChange}
          />
        </label>
      </div>
      <div>
        <ul>
          {food_list.map((item) => (
            <li key={item._id}>
              <label>
                <input
                  type="checkbox"
                  checked={items.includes(item._id)}
                  onChange={(e) => handleItemSelection(e, item._id)}
                />
                <img className="imageAutomation" src={`${import.meta.env.VITE_API_URL}/images/` + item.image} alt="" />
                {item.name} - (${item.price})
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleSaveSettings}
        disabled={!enabled} // Disable button if automation is not enabled
      >
        Save Settings
      </button>
    </div>
  );
};

export default AutomationSettings;
