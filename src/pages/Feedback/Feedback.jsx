import React, { useState } from 'react';
import axios from 'axios';
import "./Feedback.css"
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNbr: "",
    dineIn: false,
    branch: "Adma",
    delivery: false,
    itemSuggestion: "",
    rating: 0,
    description: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/feedback/submit-feedback`, formData);
      alert('Feedback submitted successfully!');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNbr: "",
        dineIn: false,
        branch: "Adma",
        delivery: false,
        itemSuggestion: "",
        rating: 0,
        description: ""
      });
    } catch (error) {
      alert('Error submitting feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Customer Feedback</h2>
      <p><b>We value your feedback at 5 Beans Coffee Shop.</b> Your thoughts help us improve our service and offerings. Thank you for taking the time to share how we can make your experience even better!</p>
      <br />
      <div className="form-group">
        <label>First Name *</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNbr"
          value={formData.phoneNbr}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Branch *</label>
        <select style={{ color: "#6b5a45" }}
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        >
          <option value="Adma">Adma</option>
          <option value="Dbayeh">Dbayeh</option>
          <option value="Dekweneh">Dekweneh</option>
        </select>
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            name="dineIn"
            checked={formData.dineIn}
            onChange={handleChange}
          />
          Dine-In Experience
        </label>

        <label>
          <input
            type="checkbox"
            name="delivery"
            checked={formData.delivery}
            onChange={handleChange}
          />
          Delivery Experience
        </label>
      </div>

      <div className="form-group">
        <label>Item to Add Suggestion</label>
        <input
          type="text"
          name="itemSuggestion"
          value={formData.itemSuggestion}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Rating (1-5)</label>
        <div style={{ display: 'flex', gap: '8px', fontSize: '32px' }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              onClick={() => setFormData({ ...formData, rating: Number(num) })}
              style={{
                cursor: 'pointer',
                color:
                  formData.rating >= num
                    ? formData.rating <= 1
                      ? '#f00000' // red
                      : formData.rating <= 2
                        ? '#f6820d' // orange
                        : formData.rating === 3
                          ? '#e1f60d' // yellow
                          : formData.rating === 4
                            ? '#10af00' // light green
                            : 'green' // dark green for 5
                    : '#ccc',
                transition: 'color 0.2s',
                userSelect: 'none',
              }}
              title={`Rate ${num}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>


      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;