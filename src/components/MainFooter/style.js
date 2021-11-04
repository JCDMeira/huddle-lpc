import styled from 'styled-components';

export const MainFooterDiv = styled.div`
  height: 57.3rem;
  margin-top: 2.338rem;
  margin-left: 0.2rem;

  div {
    display: flex;

    p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: normal;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-top: -0.8rem;
    }
  }
`;

export const Icon = styled.img`
  height: ${(props) => `${props.myHeight}rem`};
  width: ${(props) => `${props.myWidth}rem`};
  margin-right: ${(props) => `${props.mRight}rem`};
`;
