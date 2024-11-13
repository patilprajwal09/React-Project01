import React, { useContext } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

const {cartItems,addToCart, removeFromCart}=useContext(StoreContext);

  return (
    <div className='food_item'>
        <div className="food_item_img_container">

            <img src={image} alt="" className="food_item_image" />
            {
                !cartItems[id]

                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :<div className='food_item_counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>

        <div className="food_item_info">

            <div className="food_item_name_rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>

        </div>

        <p className="food_item_description">
            {description}
        </p>
        
        <p className="food_item_price">
            ${price}
        </p>
      
    </div>
  )
}

export default FoodItem;
