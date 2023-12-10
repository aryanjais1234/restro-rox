import React, { useState, useEffect } from 'react';
import {Rating} from '@mui/material/Rating';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import api from '../../Api';

const Reviews = () => {
  const [data, setData] = useState({});
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const apiData = await api.getRestaurantData();

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

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Customer Reviews" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Reviews</h1>
        <div className="app__wrapper-content">
          {dataIsLoaded ? (
            <div>
              {data.reviews.map((review, index) => (
                <div key={index} className="review">
                  <h1 className="p__opensans">Customer: {review.customer_name}</h1>
                  <h5 className="p__opensans">Rating: {review.rating} </h5>
                  {/* <Rating name="read-only" value={review.rating} readOnly /> */}
                  <p className="p__opensans">Comment: {review.comment}</p>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <p className="p__opensans">Loading Data...</p>
          )}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.review} alt="finus_img" />
      </div>
    </div>
  );
};

export default Reviews;
