import React from 'react';
import './Laurels.scss';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';

const AwardCard = ({ imgUrl, title, subtitle }) => {
  return (
    <div className='app__laurels-awards_card'>
      <img src={imgUrl} alt={title} />

      <div className='app__laurels-awards_card-content'>
        <p className='p__cormorant' style={{ color: '#dcca87' }}>
          {title}
        </p>
        <p className='p__cormorant'>{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => {
  return (
    <div id='awards' className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeading title='Awards & recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels-awards'>
          {data.awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  );
};

export default Laurels;
