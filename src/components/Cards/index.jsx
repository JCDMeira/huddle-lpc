import React from 'react';
import { Card } from '../Card';
import { CardsDiv } from './style';
import image1 from '../../assets/images/illustration-grow-together.svg';

function Cards() {
  return (
    <CardsDiv>
      <Card
        photo={image1}
        myWidth={23.7}
        myHeight={19.4}
        mTop={5.8}
        mBottom={5.7}
        tittle={'Grow Together'}
      >
        Generate meaningful discussions with your audience and build a strong,
        loyal community. Think of the insightful conversations you miss out on
        with a feedback form.
      </Card>
    </CardsDiv>
  );
}

export { Cards };
