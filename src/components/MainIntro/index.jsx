import React from 'react';
import { InfoIntro } from '../InfoIntro';
import { MainIntroContent } from './styled';
import ImgIntro from '../../assets/images/illustration-mockups.svg';

function MainIntro() {
  return (
    <MainIntroContent>
      <InfoIntro />
      <img src={ImgIntro} alt="mobile and desktop screen" />
    </MainIntroContent>
  );
}

export { MainIntro };
