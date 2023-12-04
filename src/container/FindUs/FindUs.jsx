import React, { useState, useEffect } from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const [data, setData] = useState({});
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/restaurant");
      const apiData = await response.json();

      setData(apiData);
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
  const handleVisitUs = () => {
    // Open the Google Maps link in a new tab
    window.open('https://maps.app.goo.gl/1E66LqBhCHjrt7Av7', '_blank');
  };

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
          {dataIsLoaded ? (
            <p className="p__opensans">{data?.location?.address}</p>
          ) : (
            <p className="p__opensans">Loading address...</p>
          )}
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={handleVisitUs}>
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;
