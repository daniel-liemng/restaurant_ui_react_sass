import React from 'react';
import './SpecialMenu.scss';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => {
  return (
    <div id='menu' className='app__menu flex__center section__padding'>
      <div className='app__menu-title'>
        <SubHeading title='Menu that fits your palatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__menu-content'>
        <div className='app__menu-content_wine flex__center'>
          <p className='app__menu-content_heading'>Wine & Beer</p>
          <div className='app__menu-content_items'>
            {data.wines.map((wine, index) => (
              <MenuItem key={index} {...wine} />
            ))}
          </div>
        </div>

        <div className='app__menu-content_image'>
          <img src={images.menu} alt='menu' />
        </div>

        <div className='app__menu-content_cocktails flex__center'>
          <p className='app__menu-content_heading'>Cocktails</p>
          <div className='app__menu-content_items'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={index} {...cocktail} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
