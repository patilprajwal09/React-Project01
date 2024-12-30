import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (

    <div id='explore' className='explore_menu' >

      <h1>
        Explore out menu
      </h1>

      <p className='explore_menu_text'>
        Choose from a diverse menu freaturing a delectabel array of dishes.
        Our mission is to satisfy
      </p>

      <div className="explore_menu_list" id='menu_list'>
        {
            menu_list.map((item,index)=>{ 
                return(

                    <div 
                      onClick={()=>setCategory(prev===item.menu_image?"All":item.menu_name)} 
                      key={index} className='explore_menu_list_item'
                    >
                      <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />

                        <p>
                          {item.menu_name}
                        </p>

                    </div>
                )
            })
        }

      </div>

      <hr />
      
    </div> 
  )
}

export default ExploreMenu;
