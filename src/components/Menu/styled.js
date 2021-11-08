import styled from 'styled-components';

export const MenuContent = styled.div`
  width: 100%;
  height: 2.5rem;
  position: relative;
  z-index: 2;

  padding: 0rem 1.6rem 0 1.5rem;
  margin-bottom: 8.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 10.5rem;
    height: 1.706rem;
  }
  button {
    width: 9.6rem;
    height: 2.5rem;
    border-radius: 30px;
    border: none;
    background: #fff;

    filter: drop-shadow(0px 2px 8px rgba(128, 141, 153, 0.25));

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.02rem;
    line-height: 1.5rem;

    color: #00252e;
  }

  @media (min-width: 1024px) {
    height: 4.6rem;
    margin-bottom: 6.5rem;
    padding: 0;
    img {
      width: 19.7rem;
      height: 3.2rem;
    }
    button {
      width: 20rem;
      height: 4.6rem;
      font-size: 1.42rem;
      line-height: 2.1rem;
    }
  }
`;
