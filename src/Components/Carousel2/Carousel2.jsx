import React from "react";
import "./Carousel2.css";

const Carousel2 = () => {
  return (
    <div className="carousel-container2">
      <div className="carousel-content">
        <div className="text-content">
          <button className="download-button">Download App</button>
          <h1>Never Stop Listening</h1>
          <p>
            ganaCloud is available on Web, iOS, Android, Sonos, Chromecast, and
            Xbox One.
          </p>
          <div className="store-buttons">
            <img
              src="./Images/StoreGoogle-Play.png"
              className="store-icon"
            />
            <img
              src="./Images/StoreApp-Store.png"
              alt="App Store"
              className="store-icon"
            />
          </div>
        </div>
        <div className="image-content">
          <img
            src="./Images/image-8.png"
            alt="Listening"
            className="listening-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
