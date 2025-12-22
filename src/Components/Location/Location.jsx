const Location = () => {
    return (
      <div style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <h1 style={{ marginBottom: "0.5rem", textAlign: "center" }}>Visit Us</h1>
        <p style={{ marginBottom: "0.5rem", marginTop:"1rem", textAlign: "center" }}>
          <strong>Adma w Dafnah</strong>
        </p>
        <div style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "12px",
          overflow: "hidden"
        }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.7101120243615!2d35.644648411545035!3d34.0213076192508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f41004822b1cf%3A0x931ea87b8ee98e9!2s5%20Beans%20Coffee%20Shop!5e1!3m2!1sen!2slb!4v1752230812863!5m2!1sen!2slb"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <strong>Tower 44 Ground Floor, Dekwaneh</strong>
        </p>
        <div style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "12px",
          overflow: "hidden"
        }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.857655377382!2d35.53902391154023!3d33.87997812669461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17004ecfd541%3A0x335199c556745060!2s5%20Beans%20Coffee%20Shop!5e1!3m2!1sen!2slb!4v1752230574207!5m2!1sen!2slb"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Location;
  