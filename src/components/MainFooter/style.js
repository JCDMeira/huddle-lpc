import styled from 'styled-components';

export const MainFooterDiv = styled.div`
  height: 57.3rem;
  margin-top: 2.338rem;
  margin-left: 0.2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
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

export const Selection = styled.div`
  padding: 3.9rem 0 3.6rem 0;

  a {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.5rem;
    display: block;
    text-decoration: none;
    margin: 1.8rem 0;

    color: #ffffff;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const Social = styled.div`
  width: 11.7rem;
  height: 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  div {
    width: 3rem;
    height: 3rem;

    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
      border: 1px solid #ff52bf;
    }
    svg {
      color: #fff;
      :hover {
        color: #ff52bf;
      }
    }
  }
`;
