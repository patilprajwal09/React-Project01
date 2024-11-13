import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeals } from '../../assets/topMeals';
import CarouselItem from './CarouselItem';
import './multipleItemCarousel.css';

const MultipleItemCarousel = ({ category, setCategory }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div className='main_div'>

      <div>

        <div className='menu' id='menu'>

          <h1>
            Explore our menu
          </h1>

          <p className='menu_text'>
            Choose from a diverse menu featuring a delectable array of dishes.
            Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
          </p>

        </div>

        <Slider {...settings}>
          {
            topMeals.map((item) => {

              return (
                <CarouselItem
                  key={item.menu_name} 
                  menu_image={item.menu_image}
                  menu_name={item.menu_name}
                  category={category} 
                  setCategory={setCategory} 
                />
              )
            })
          }

        </Slider>

      </div>

      <hr />
      
    </div>
  );
}

export default MultipleItemCarousel;
