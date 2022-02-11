
import { ChevronRightRounded } from '@material-ui/icons';
import React from 'react';

const SubMenu = ({name}) => {
  return (
    <div className="sub-menu-container">
      <h3> {name} </h3>
      <div className="view-all">
        <p>view all</p>
        <ChevronRightRounded className='icon' />
      </div>
    </div>
  );
};

export default SubMenu;
