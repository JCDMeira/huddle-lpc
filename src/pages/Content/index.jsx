import React from 'react';
import { Cards } from '../../components/Cards';
import { IntroContent } from '../../components/IntroContent';
import { ModalRegister } from '../ModalRegister';
import { ContentDiv } from './style';

function Content() {
  return (
    <ContentDiv>
      <IntroContent />
      <Cards />
      <ModalRegister />
    </ContentDiv>
  );
}

export { Content };
