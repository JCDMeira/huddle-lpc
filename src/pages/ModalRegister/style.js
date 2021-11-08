import styled from 'styled-components';

export const ModalRegisterDiv = styled.div`
  /* width: 35.2rem; */
  width: 93.86666666666666vw;
  height: 17.5rem;
  background: #fff;

  box-shadow: 0px 0px 4px 4px rgba(128, 141, 153, 0.25);
  border-radius: 15px;

  position: absolute;
  margin-top: 243.7rem;
  padding: 4.6rem 2.6rem 0 2.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 1.76rem;
    line-height: 2.1rem;
    text-align: center;
    margin-bottom: 2.7rem;

    color: #00252e;
  }
  button {
    width: 20rem;
    height: 3.9rem;
    border: none;

    background: #ff52bf;
    border-radius: 30px;

    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.4rem;
    text-align: center;

    color: #ffffff;

    :hover {
      cursor: pointer;
      filter: opacity(0.7);
    }
  }

  @media (min-width: 1024px) {
    width: 80rem;
    height: 28.1rem;
    margin-top: 243.6rem;
    padding: 6.8rem 1.2rem 0 1.12rem;

    h1 {
      font-size: 3.15rem;
      line-height: 4.7rem;
      margin-bottom: 3.7rem;
    }

    button {
      width: 40rem;
      height: 7.8rem;
      border-radius: 40px;

      font-size: 2rem;
      line-height: 2.7rem;
    }
  }
`;
