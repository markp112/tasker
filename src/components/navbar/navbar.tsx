import React from 'react';
import logo from '../../assets/icons/calendar.png';
import './navbar.css';

type Props = {
  isLoggedIn: boolean;
};

export const Navbar = (props: Props) => {
  const navItems = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
    },
    {
      label: 'Login',
      icon: 'pi pi-fw pi-key',
    },
    {
      label: 'Settings',
      icon: 'pi pi-fw pi-cog',
    },
  ];

  function title() {
    return (
      <li className="flex-row flex items-center">
        <img alt="logo" src={logo} height="72" className="mt-2" />
        <span className="p-2 text-primary-100 text-2xl inline-block ml-2">Tasker</span>
      </li>
    );
  }

  const login = (
    <span className="text-primary-100 text-xl hover:text-background hover:bg-primary-200 hover:cursor-pointer p-2 inline-block mr-4">
      Login
    </span>
  );

  return (
    <div>
      <header>
        <nav className="w-100 bg-gray-700 h-24 flex justify-between flex-row items-center">
          {title()}
          {!props.isLoggedIn && login}
        </nav>
      </header>
    </div>
  );
};
