import React from 'react';
import { ContentFooterDiv, LogoFooter } from './style';
import footerLogo from '../../assets/images/logo-footer.svg';
import { MainFooter } from '../MainFooter';

function ContentFooter() {
  return (
    <ContentFooterDiv>
      <LogoFooter src={footerLogo} alt="Huddle logo" />
      <MainFooter />
    </ContentFooterDiv>
  );
}

export { ContentFooter };
