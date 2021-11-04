import React from 'react';
import { Cards } from '../../components/Cards';
import { IntroContent } from '../../components/IntroContent';
import { ContentDiv } from './style';

function Content() {
  return (
    <ContentDiv>
      <IntroContent />
      <Cards />
    </ContentDiv>
  );
}

export { Content };
