import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

// Assuming MenuItem component is imported from '../../components'
import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import api from '../../Api';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [menuData, setMenuData] = useState({});
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [selectedWineBeerDish, setSelectedWineBeerDish] = useState(null);
  const [selectedSeasonalDish, setSelectedSeasonalDish] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const apiData = await api.getRestaurantData();
      setMenuData(apiData.menu || {});
      setDataIsLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      console.error('Fetch error:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on component mount

  const handleViewMore = () => {
    setShowFullMenu(true);
  };

  const handleWineBeerDishClick = (index) => {
    setSelectedWineBeerDish((prevSelectedDish) => (prevSelectedDish === index ? null : index));
  };

  const handleSeasonalDishClick = (index) => {
    setSelectedSeasonalDish((prevSelectedDish) => (prevSelectedDish === index ? null : index));
  };

  const renderDishDetails = (dish) => {
    return (
      <div className="dish-details">
        <p>Description: {dish.description}</p>
        <p>Price: {dish.price}</p>
        <p>Ingredients: {dish.ingredients.join(', ')}</p>
        <p>Nutritional Info:</p>
        <ul>
          <li>Calories: {dish.nutritional_info.calories}</li>
          <li>Protein: {dish.nutritional_info.protein}</li>
          <li>Carbohydrates: {dish.nutritional_info.carbohydrates}</li>
          <li>Fat: {dish.nutritional_info.fat}</li>
        </ul>
        <p>Seasonal Availability: {dish.seasonal_availability.join(', ')}</p>
      </div>
    );
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {menuData.categories &&
              menuData.categories.map((category, index) => (
                <React.Fragment key={category.name + index}>
                  <p className="app__specialMenu-menu_subheading">{category.name}</p>
                  {category.items &&
                    category.items.map((item, itemIndex) => (
                      <div key={item.name + itemIndex} className="menu-item">
                        <MenuItem
                          title={item.name}
                          price={item.price}
                          tags={item.tags}
                        />
                        <Button variant="outlined" onClick={() => handleWineBeerDishClick(item)}>
                          Info
                        </Button>
                        {selectedWineBeerDish === item && renderDishDetails(item)}
                      </div>
                    ))}
                </React.Fragment>
              ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Seasonal Menu</p>
          <div className="app__specialMenu_menu_items">
            {menuData.seasonal_menu &&
              menuData.seasonal_menu.items.map((cocktail, index) => (
                <div key={cocktail.name + index} className="menu-item">
                  <MenuItem
                    title={cocktail.name}
                    price={cocktail.price}
                    tags={cocktail.tags}
                  />
                  <Button variant="outlined" onClick={() => handleSeasonalDishClick(cocktail)}>
                    Info
                  </Button>
                  {selectedSeasonalDish === cocktail && renderDishDetails(cocktail)}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        {!showFullMenu && (
          <button type="button" className="custom__button" onClick={handleViewMore}>
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default SpecialMenu;
