import React from 'react';
import { Card } from '../Card';
import { CardsDiv } from './style';
import image1 from '../../assets/images/illustration-grow-together.svg';
import image2 from '../../assets/images/illustration-flowing-conversation.svg';
import image3 from '../../assets/images/illustration-your-users.svg';

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
        myDesktopWidth={40.4}
        myDesktopHeight={33.1}
        myPad={[5.7, 3.6, 0, 11.9]}
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
        myDesktopWidth={40.4}
        myDesktopHeight={33.1}
        myPad={[5.7, 3.6, 0, 11.9]}
      >
        You wouldn&apos;t paginate a conversation in real life, so why do it
        online? Our threads have just-in-time loading for a more natural flow.
      </Card>

      <Card
        photo={image3}
        myWidth={24.4}
        myHeight={18.449}
        mTop={5.6}
        mBottom={6.451}
        tittle={'Your Users'}
        myDesktopWidth={40.4}
        myDesktopHeight={33.1}
        myPad={[5.7, 3.6, 0, 11.9]}
      >
        It takes no time at all to integrate Huddle with your app&apos;s
        authentication solution. This means, once signed in to your app, your
        users can start chatting immediately.
      </Card>
    </CardsDiv>
  );
}

export { Cards };
