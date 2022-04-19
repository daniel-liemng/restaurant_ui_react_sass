import React from 'react';
import './AboutUs.scss';

import { images } from '../../constants';

const AboutUs = () => {
  return (
    <div
      id='about'
      className='app__about app__bg flex__center section__padding'
    >
      <div className='app__about-overlay flex__center'>
        <img src={images.G} alt='G' />
      </div>

      <div className='app__about-content flex__center'>
        <div className='app__about-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='custom__button'>
            Know More
          </button>
        </div>

        <div className='app__about-content_knife flex__center'>
          <img src={images.knife} alt='knife' />
        </div>

        <div className='app__about-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='custom__button'>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
