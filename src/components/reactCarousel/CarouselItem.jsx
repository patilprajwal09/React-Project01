import React from 'react';
import './carouselitem.css';

const CarouselItem = ({ menu_name, menu_image, category, setCategory }) => {

  const handleClick = () => {
    setCategory(category === menu_name ? "All" : menu_name);
  };

  return (
    <div className='carousel_item' onClick={handleClick}>

      <img className={category === menu_name ? "active" : ""} src={menu_image} alt="" />

      <span>{menu_name}</span>
      
    </div>
  );
}

export default CarouselItem;
