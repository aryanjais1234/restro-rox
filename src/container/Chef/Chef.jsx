import React, { useState, useEffect } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

import api from '../../Api';

const Chef = () => {
  const [restaurants, setRestaurants] = useState({});
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const data = await api.getRestaurantData();

      setRestaurants(data);
      setDataIsLoaded(true);

      console.log(data);
    } catch (error) {
      console.error('Error fetching restaurants:', error.message);
      console.error('Fetch error:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        {/* Use the chef image from the API response */}
        <img src={restaurants?.chef?.image || images.chef} alt="chef_image" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            {/* Use the chef's bio from the API response */}
            <p className="p__opensans">{restaurants?.chef?.bio}</p>
          </div>
          {/* Add more content if needed */}
        </div>

        <div className="app__chef-sign">
          {/* Use the chef's name from the API response */}
          <p>{restaurants?.chef?.name}</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
