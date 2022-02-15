import React, { useState } from 'react';
import menu from '../../../assets/icons/menu.png';
import menuHover from '../../../assets/icons/menu-hover.png';
import './menu.css';
import { MyProfile } from 'components/drawers/my-profile/my-profile';

type menuItems = | 'my_profile';

type menuItem = {
  menuItem: string;
  id: menuItems;
};

const menuItems: menuItem[] = [
  {
    menuItem: 'My Profile',
    id: 'my_profile',
  },
];

type Props = {
  displayDrawer: (drawContent: JSX.Element) => void;
};

export const NavMenu = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menuItemClick = (id: menuItems) => {
    switch(id) {
      case 'my_profile': 
        props.displayDrawer(MyProfile());
    }
  };

  return (
    <span  className="hamburger-icon">
      <img
        src={isHovering ? menuHover : menu}
        alt="menu"
        height="72"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onClick={() => setShowMenu(!showMenu)}
      />
      {
        showMenu && 
        <ul className="nav-menu">
          {
            menuItems.map(item => (
              <li 
                key={item.id} 
                onClick={() => menuItemClick(item.id)}
              >{item.menuItem}</li>
            )
              )
          }
        </ul>
      }
    </span>
  );
};
