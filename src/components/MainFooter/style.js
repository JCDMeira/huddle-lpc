import styled from 'styled-components';

export const MainFooterDiv = styled.div`
  height: 57.3rem;
  margin-top: 2.338rem;
  margin-left: 0.2rem;
`;

export const MyDiv = styled.div`
  display: flex;
  margin-bottom: ${(props) => `${props.mBottom}rem`};
`;

export const Icon = styled.img`
  height: ${(props) => `${props.myHeight}rem`};
  width: ${(props) => `${props.myWidth}rem`};
  margin-right: ${(props) => `${props.mRight}rem`};
  margin-left: ${(props) => `${props.mLeft}rem`};
`;

export const Paragraph = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-top: ${(props) => `${props.mTop}rem`};
`;
