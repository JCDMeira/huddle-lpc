import React from 'react';
import { InfoIntro } from '../InfoIntro';
import { MainIntroContent } from './styled';

function MainIntro() {
  return (
    <MainIntroContent>
      <InfoIntro />
    </MainIntroContent>
  );
}

export { MainIntro };
