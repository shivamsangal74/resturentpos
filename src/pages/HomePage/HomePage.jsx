import { HeartFilled, PercentageOutlined } from '@ant-design/icons'
import React from 'react';
import './HomePage.scss';
import { HorizontalLine } from '../../components/HorizontalLine/HorizontalLine';
import { CategoryChip } from '../../components/CategoryChip/CategoryChip';
import burger from '../../assets/images/burger.png';
import coffee from '../../assets/images/coffee.png';
import bread from '../../assets/images/bread(2).png';
import pizza from '../../assets/images/pizza.png';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import items from '../../../Items.json'

export const HomePage = () => {
  const categoryList = [
    {
      id: 1,
      image: burger,
      title: 'Burger',
    },
    {
      id: 2,
      image: bread,
      title: 'Bread',
    },
    {
      id: 3,
      image: coffee,
      title: 'Coffee',
    },
    {
      id: 4,
      image: pizza,
      title: 'Pizza',
      isActive: true,
    }
  ];
  
  return (
    <div className="homeContainer">
      <div className="actions">
        <div className="left">
          <div className="offers">
            <span>Choose Items</span>
          </div>
          <div className="icons">
            <HeartFilled />
            <PercentageOutlined />
          </div>
        </div>


      </div>
      <div className="hr">
        <HorizontalLine />
      </div>


      <div className="categoryList">
        {categoryList && categoryList.map((category, index) => {
          return <CategoryChip title={category.title} image={category.image} key={category.id} isActive={category.isActive} />
        })}

      </div>


      <div className="itemList">
      {items && items.map((item, index) => {
        return <CategoryCard item={item} key={item.id} />
      }) }
      </div>
    </div>
  )
}
