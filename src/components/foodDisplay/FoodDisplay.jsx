import React, { useContext } from 'react'
import './fooddisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'

const FoodDisplay = ({category}) => {

  const {food_list}=useContext(StoreContext)

  return (

    <div className='food_display' id='food_display'>

      <h2>
        Top Dishes near you
      </h2>

      <div className='food_display_list'>
        {
          food_list.map((item,index)=>{

            {console.log(category,item.category)}

            if(category==="All" || category===item.category){
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
            
          })
        }

      </div>

    </div>
  )
}

export default FoodDisplay;
