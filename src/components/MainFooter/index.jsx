import React from 'react';
import { MainFooterDiv, Icon } from './style';
import locationIcon from '../../assets/images/icon-location.svg';
// import phoneIcon from '../../assets/images/icon-phone.svg';
// import emailIcon from '../../assets/images/icon-email.svg';

function MainFooter() {
  return (
    <MainFooterDiv>
      <div>
        <Icon
          src={locationIcon}
          alt="location icon"
          myWidth={1.3}
          myHeight={1.8}
          mRight={2.7}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </MainFooterDiv>
  );
}

export { MainFooter };
