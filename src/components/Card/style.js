import styled from 'styled-components';

export const CardDiv = styled.div`
  /* width: 33.6rem; */
  width: 89.6vw;
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
    padding: 0 4rem;

    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.4rem;

      text-align: center;

      color: #00252e;

      margin-bottom: 1.7rem;
    }

    p {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: normal;
      font-size: 1.4rem;
      line-height: 2.1rem;

      text-align: center;

      color: #808d99;
    }
  }

  @media (min-width: 1024px) {
    width: 85.69444444444444vw;
    height: 44.5rem;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 3.7rem;

    padding-right: ${(props) => `${props.myPad[1]}rem`};
    padding-left: ${(props) => `${props.myPad[3]}rem`};

    img {
      height: ${(props) => `${props.myDesktopHeight}rem`};
      width: ${(props) => `${props.myDesktopWidth}rem`};
      margin-top: ${(props) => `${props.mTop}rem`};
      margin-bottom: ${(props) => `${props.mBottom}rem`};
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: initial;
      padding: 0 16rem 0 0;
      h1 {
        font-size: 2.8rem;
        line-height: 4.2rem;
        font-weight: 700;

        text-align: initial;

        margin-bottom: 1.7rem;
      }

      p {
        font-size: 1.8rem;
        line-height: 2.6rem;

        text-align: initial;
      }
    }
  }
`;
