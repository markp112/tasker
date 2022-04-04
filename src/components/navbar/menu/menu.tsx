import React, { useState } from 'react';
import menu from '../../../assets/icons/menu.png';
import menuHover from '../../../assets/icons/menu-hover.png';

import './menu.css';
import { useAuth0 } from '@auth0/auth0-react';
import { MenuItems } from './models';

type menuItem = {
  menuItem: string;
  id: MenuItems;
  requiresAuthentication: boolean;
};

const menuItems: menuItem[] = [
  {
    menuItem: 'My Profile',
    id: 'my_profile',
    requiresAuthentication: true,
  },
  {
    menuItem: 'Create Task',
    id: 'create_task',
    requiresAuthentication: true,
  },
];

type Props = {
  displayDrawer: (drawContent: MenuItems) => void;
};

export const NavMenu = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated } = useAuth0();

  const menuItemClick = (id: MenuItems) => {
    props.displayDrawer(id);
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
              item.requiresAuthentication && isAuthenticated ?
              <li 
                key={item.id} 
                onClick={() => menuItemClick(item.id)}
              >{item.menuItem}</li>
            : <></>
            )
              )
          }
        </ul>
      }
    </span>
  );
};
