import styled from 'styled-components';

export const InfoIntroContent = styled.div`
  /* width: 30.8rem; */
  width: 82.13333333333334vw;
  height: 28.4rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 2.35rem;
    line-height: 3.5rem;
    text-align: center;

    color: #00252e;

    margin-bottom: 2.3rem;
  }

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #00252e;
    padding: 0 0.1rem;

    margin-bottom: 3.1rem;
  }

  button {
    width: 23.9rem;
    height: 3.9rem;
    border: none;

    background: #ff52bf;
    border-radius: 30px;

    font-family: ' Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2.4rem;
    text-align: center;

    color: #ffffff;
  }

  @media (min-width: 1024px) {
    width: 52.3rem;
    height: 49.8rem;
    align-items: initial;

    h1 {
      font-size: 3.9rem;
      line-height: 5.8rem;
      text-align: initial;

      margin-top: 12.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.7rem;
      text-align: initial;
      padding: 0;
      margin-bottom: 3rem;
    }

    button {
      width: 27.9rem;
      height: 5.8rem;

      font-size: 1.6rem;
    }
  }
`;
