import React from 'react';
import logo from '../../assets/icons/calendar.png';

import './navbar.css';
import { LoginButton } from '../buttons/auth/login-button';
import { LogoutButton } from '../buttons/auth/logout-button';
import { NavMenu } from './menu/menu';
import { MenuItems } from './menu/models';

type Props = {
  isLoggedIn: boolean;
  displayDrawer: (drawContent: MenuItems) => void;
};

export const Navbar = (props: Props) => {

  function title() {
    return (
      <li className="flex-row flex items-center">
        <img alt="logo" src={logo} height="72" className="mt-2" />
        <span className="p-2 text-primary-100 text-2xl inline-block ml-2">Tasker</span>
      </li>
    );
  }

  return (
    <div>
      <header>
        <nav className="w-100 bg-gray-700 h-24 flex justify-between flex-row items-center">
          {title()}
          <span className="w-auto flex flex-row justify-start items-center">
            { props.isLoggedIn ? LogoutButton() : LoginButton() }
            { <NavMenu displayDrawer={(drawContent: MenuItems) => props.displayDrawer(drawContent)}/> }
          </span>
        </nav>
      </header>
    </div>
  );
};
