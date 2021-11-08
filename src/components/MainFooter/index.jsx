import React from 'react';
import {
  MainFooterDiv,
  Info,
  MyDiv,
  Icon,
  Paragraph,
  Selection,
  Social,
} from './style';
import locationIcon from '../../assets/images/icon-location.svg';
import phoneIcon from '../../assets/images/icon-phone.svg';
import emailIcon from '../../assets/images/icon-email.svg';
import { RiFacebookFill } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';
import { RiInstagramLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

function MainFooter() {
  const widthScreen = window.screen.width;
  return (
    <MainFooterDiv>
      <Info>
        <MyDiv mBottom={2.7}>
          <Icon
            src={locationIcon}
            alt="location icon"
            myWidth={1.3}
            myHeight={1.8}
            mRight={2.7}
            mLeft={0}
          />
          <Paragraph mTop={'-0.8'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Paragraph>
        </MyDiv>

        <MyDiv mBottom={2.8}>
          <Icon
            src={phoneIcon}
            alt="phone icon"
            myWidth={1.8}
            myHeight={1.8}
            mRight={1.9}
            mLeft={0.3}
          />
          <Paragraph mTop={'-0.3'}>+1-543-123-4567</Paragraph>
        </MyDiv>

        <MyDiv mBottom={0}>
          <Icon
            src={emailIcon}
            alt="email icon"
            myWidth={2}
            myHeight={1.6}
            mRight={1.8}
            mLeft={0.2}
          />
          <Paragraph mTop={'-0.4'}>
            {widthScreen > 1023 ? 'example@huddle.com' : 'example@fylo.com'}
          </Paragraph>
        </MyDiv>
      </Info>
      <Selection>
        <div>
          <a href="#">About Us</a>
          <a href="#">What We Do</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <a href="#">Career</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </div>
      </Selection>

      <Social>
        <IconContext.Provider value={{ size: 18 }}>
          <div>
            <RiFacebookFill />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: 14 }}>
          <div>
            <SiTwitter />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: 18 }}>
          <div>
            <RiInstagramLine />
          </div>
        </IconContext.Provider>
      </Social>
    </MainFooterDiv>
  );
}

export { MainFooter };
