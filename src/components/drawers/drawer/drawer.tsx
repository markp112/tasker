import React, { useState } from 'react';
import './drawer.css';
import closeIcon from '../../../assets/icons/arrow_right-32.png';
import closeIconHover from '../../../assets/icons/arrow_right-hover-32.png';

type Props = {
  showDrawer: (state: boolean) => void;
  childContent: JSX.Element;
};

export const Drawer = (props: Props) => {
  
  const [drawerClose, setDrawCloseIcon] = useState(closeIcon);
  
  const closeDrawer = () => {
    props.showDrawer(false);
  };

  return (
    <div className="drawer lh-right">
      <img
        className='cursor-pointer'
        src={drawerClose}
        alt=""
        onMouseOver={() => setDrawCloseIcon(closeIconHover)}
        onMouseOut={() => setDrawCloseIcon(closeIcon)}
        onClick={() => closeDrawer()}
      />
      { props.childContent }
    </div>
  );
}
