import React from 'react';
import './Location.css';

const Location = () => {
  const locations = [
    {
      id: 1,
      name: "Adma w Dafnah",
      address: "Main Street, Adma w Dafnah",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8795283331465!2d35.64464841129425!3d34.021303173056786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f41004822b1cf%3A0x931ea87b8ee98e9!2s5%20Beans%20Coffee%20Shop!5e1!3m2!1sen!2slb!4v1775286501433!5m2!1sen!2slb&maptype=roadmap"
    },
    {
      id: 2,
      name: "Dekwaneh",
      address: "Tower 44 Ground Floor, Dekwaneh",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.857655377382!2d35.53902391154023!3d33.87997812669461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17004ecfd541%3A0x335199c556745060!2s5%20Beans%20Coffee%20Shop!5e1!3m2!1sen!2slb!4v1752230574207!5m2!1sen!2slb&maptype=roadmap"
    }
  ];

  return (
    <div className="location-page-alt">
      <div className="hero-section">
        <div className="hero-content">
          <span className="badge">Locations</span>
          <h1>Find Your Perfect Cup</h1>
          <p>Visit any of our locations for an exceptional coffee experience</p>
        </div>
      </div>

      <div className="locations-grid">
        {locations.map((location, index) => (
          <div key={location.id} className="location-card-alt">
            <div className="card-header">
              <div className="branch-number">0{index + 1}</div>
              <h3>{location.name}</h3>
            </div>
            <div className="address-section">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#c9a03d"/>
              </svg>
              <p>{location.address}</p>
            </div>
            <div className="map-alt">
              <iframe
                title={`Map for ${location.name}`}
                src={location.embedUrl}
                width="100%"
                height="350"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;