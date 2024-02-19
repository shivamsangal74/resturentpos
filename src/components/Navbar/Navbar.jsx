import React from 'react'
import './Navbar.scss'
import { SearchOutlined } from '@ant-design/icons'

export const Navbar = () => {
  return (
    <div className='navcontainer'>
      <div className="name">
        <div>Tico Taco Restaurant</div>
        <div className="dateandtime">{new Date().toLocaleTimeString() } <span>{new Date().toLocaleDateString()}</span></div>
      </div>

      <div className="searchbar">
      
      <SearchOutlined  style={{ fontSize: '1.5rem', color: '#fff' }}  />
      <input type="text" placeholder='Search by Category or Item' />
     
      
      </div>
    </div>
  )
}
