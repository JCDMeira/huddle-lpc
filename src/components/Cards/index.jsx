import React from 'react';
import { Card } from '../Card';
import { CardsDiv } from './style';
import image1 from '../../assets/images/illustration-grow-together.svg';
import image2 from '../../assets/images/illustration-flowing-conversation.svg';

function Cards() {
  return (
    <CardsDiv>
      <Card
        photo={image1}
        myWidth={23.7}
        myHeight={19.4}
        mTop={5.8}
        mBottom={5.5}
        tittle={'Grow Together'}
      >
        Generate meaningful discussions with your audience and build a strong,
        loyal community. Think of the insightful conversations you miss out on
        with a feedback form.
      </Card>

      <Card
        photo={image2}
        myWidth={24.3}
        myHeight={17.3}
        mTop={6.1}
        mBottom={7.1}
        tittle={'Flowing Conversations'}
      >
        You wouldn&apos;t paginate a conversation in real life, so why do it
        online? Our threads have just-in-time loading for a more natural flow.
      </Card>
    </CardsDiv>
  );
}

export { Cards };
