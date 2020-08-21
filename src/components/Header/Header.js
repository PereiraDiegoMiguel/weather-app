import React from 'react';
import './styles.css';
import image from '../../images/landscape.jpg'


function Header() {
  return (
    <div className="local-container">
      <img src={image} alt="" />
      {/*Logo*/}
      <div className="state">
        <label>Estado</label>
        <select className="state-select" name="state" id="state">Estado</select>
      </div>
      <div>
        <label>Cidade</label>
        <select className="city-select" name="state" id="state">Cidade</select>
      </div>

    </div>

  );
}

export default Header;