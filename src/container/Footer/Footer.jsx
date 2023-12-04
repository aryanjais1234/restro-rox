import React, { useState, useEffect } from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const [restaurantData, setRestaurantData] = useState({});
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/restaurant");
      const apiData = await response.json();

      setRestaurantData(apiData);
      setDataIsLoaded(true);

      console.log(apiData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      console.error('Fetch error:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          {dataIsLoaded ? (
            <>
              <p className="p__opensans">{restaurantData.location?.address}</p>
              <p className="p__opensans">{restaurantData.location?.latitude}</p>
              <p className="p__opensans">{restaurantData.location?.longitude}</p>
              {restaurantData.online_presence?.social_media && (
                <div className="app__footer-links_icons">
                  <a href={restaurantData?.online_presence.social_media?.facebook} target="_blank" rel="noopener noreferrer">
                    <FiFacebook />
                  </a>
                  <a href={restaurantData?.online_presence.social_media?.instagram} target="_blank" rel="noopener noreferrer">
                    <FiInstagram />
                  </a>
                  <a href={restaurantData?.online_presence.social_media?.twitter} target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                  </a>
                  {/* You can add Twitter link here if needed */}
                </div>
              )}
            </>
          ) : (
            <p className="p__opensans">Loading contact information...</p>
          )}
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          {dataIsLoaded ? (
            <>
              <p className="p__opensans">&quot;{restaurantData?.ambiance?.description}&quot;</p>
              <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
            </>
          ) : (
            <p className="p__opensans">Loading restaurant information...</p>
          )}
        </div>
      </div>

      <div className="footer__copyright">
        {dataIsLoaded ? (
          <p className="p__opensans">{restaurantData.copyright}</p>
        ) : (
          <p className="p__opensans">Loading copyright information...</p>
        )}
      </div>
    </div>
  );
};

export default Footer;
