import React from 'react'
import './CategoryCard.scss'
import burger from '../../assets/images/burger.png'
export const CategoryCard = ({item}) => {
   
    return (
        <div className="categoryCard">
            <div className="wrapper">
                <div className="image">
                    <img src={item.img} alt="" />
                </div>

                <div className="name">
                    {item.name}
                </div>

                <div className="info">
                    <div className="price">
                    ₹ {item.price}
                    </div>

                    <div className="count">
                        11 Items
                    </div>
                </div>
            </div>
        </div>
    )
}
