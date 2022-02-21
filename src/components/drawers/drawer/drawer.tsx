import React, { useContext, useState } from 'react';
import './drawer.css';
import closeIcon from '../../../assets/icons/arrow_right-32.png';
import closeIconHover from '../../../assets/icons/arrow_right-hover-32.png';
import { MyProfile } from '../my-profile/my-profile';
import { useEffect } from '@storybook/addons';

type Props = {
  showDrawer: (state: boolean) => void;
  childContent: string;
};

export const Drawer = (props: Props) => {
  
  const [drawerClose, setDrawCloseIcon] = useState(closeIcon);

  const closeDrawer = () => {
    props.showDrawer(false);
  };


  
  function getChildContent(): JSX.Element {
    switch(props.childContent) {
      case 'myProfile': 
        return MyProfile();
      default:
          return <></>;
    }
  }

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
      {
        getChildContent()
      }
    </div>
  );
}
