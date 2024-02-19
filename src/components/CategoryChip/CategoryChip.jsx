import React from 'react' 
import burger from '../../assets/images/burger.png'
import './CategoryChip.scss'
export const CategoryChip = ({image,title,isActive,onClick}) => {
  
  return (
    <div className={`category-chip ${isActive ? 'active' : ''}`}>
        <div className="img">
            <img src={image || burger } alt="Category Image" />
        </div>
        <div className="title">
            <span>{title || 'Burger'}</span>
        </div>
    </div>
  )
}
