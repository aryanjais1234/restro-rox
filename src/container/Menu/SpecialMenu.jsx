import React, { useState, useEffect } from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [menuData, setMenuData] = useState({});
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/restaurant");
      const apiData = await response.json();

      setMenuData(apiData.menu || {});
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

  const handleViewMore = () => {
    setShowFullMenu(true);
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
                      <MenuItem
                        key={item.name + itemIndex}
                        title={item.name}
                        price={item.price}
                        tags={item.tags}
                      />
                    ))}
                </React.Fragment>
              ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {menuData.cocktails &&
              (showFullMenu
                ? menuData.cocktails.map((cocktail, index) => (
                    <MenuItem
                      key={cocktail.name + index}
                      title={cocktail.name}
                      price={cocktail.price}
                      tags={cocktail.tags}
                    />
                  ))
                : menuData.cocktails.slice(0, 2).map((cocktail, index) => (
                    <MenuItem
                      key={cocktail.name + index}
                      title={cocktail.name}
                      price={cocktail.price}
                      tags={cocktail.tags}
                    />
                  )))}
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
