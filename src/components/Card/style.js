import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 33.6rem;
  height: 48.8rem;

  box-shadow: 0px 0px 4px 8px #f6f6f6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4.1rem;

  img {
    height: ${(props) => `${props.myHeight}rem`};
    width: ${(props) => `${props.myWidth}rem`};
    margin-top: ${(props) => `${props.mTop}rem`};
    margin-bottom: ${(props) => `${props.mBottom}rem`};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3.8rem;

    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.4rem;

      text-align: center;

      color: #00252e;

      margin-bottom: 1.7rem;
    }

    p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 2.1rem;

      text-align: center;

      color: #808d99;
    }
  }
`;
