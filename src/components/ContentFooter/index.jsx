import React from 'react';
import { ContentFooterDiv } from './style';
import footerLogo from '../../assets/images/logo-footer.svg';

function ContentFooter() {
  return (
    <ContentFooterDiv>
      <img src={footerLogo} alt="" />
    </ContentFooterDiv>
  );
}

export { ContentFooter };
