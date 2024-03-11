import React from 'react'
import './CategoryCard.scss'
import burger from '../../assets/images/burger.png'
import { useDispatch } from 'react-redux';
import {additem} from '../../Store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CategoryCard = ({item}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(additem(item));
        toast.success(`${item.name} added to cart!`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
          });
      };
    
    return (
        <div className="categoryCard">
            <div className="wrapper" onClick={handleAddToCart}>
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
                        0 Items
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}
