import React from 'react';
import { ContentFooterDiv, LogoFooter, PCopy } from './style';
import footerLogo from '../../assets/images/logo-footer.svg';
import { MainFooter } from '../MainFooter';

function ContentFooter() {
  return (
    <ContentFooterDiv>
      <LogoFooter src={footerLogo} alt="Huddle logo" />
      <MainFooter />
      <PCopy>© Copyright 2018 Huddle. All rights reserved.</PCopy>
    </ContentFooterDiv>
  );
}

export { ContentFooter };
