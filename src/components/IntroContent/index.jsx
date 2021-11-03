import React from 'react';
import { MainIntro } from '../MainIntro';
import { Menu } from '../Menu';
import { Intro } from './styled';

function IntroContent() {
  return (
    <Intro>
      <Menu />
      <MainIntro />
    </Intro>
  );
}

export { IntroContent };
