import React from 'react';
import { MenuContent } from './styled';
import Logo from '../../assets/images/logo.svg';

function Menu() {
  return (
    <MenuContent>
      <img src={Logo} alt="logo" />
      <button>Try It Free</button>
    </MenuContent>
  );
}

export { Menu };
