import React from 'react';
import './styles.css';
import image from '../../images/landscape.jpg'
import Search from '../Search/Search';


function Header() {
  return (
    <> <img className="image" src={image} alt="LostImage" />
      <Search />
    </>
  );
}

export default Header;