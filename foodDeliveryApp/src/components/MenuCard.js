
import { ChevronRightRounded } from '@material-ui/icons';
import React from 'react';

const MenuCard = ({imgSrc,name}) => {
  return (
    <div className="row-menu-card">
      <div className="img-box">
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
        <ChevronRightRounded className='loading' />
      </div>
    </div>
  );
};

export default MenuCard;
