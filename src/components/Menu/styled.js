import styled from 'styled-components';

export const MenuContent = styled.div`
  width: 100%;
  height: 2.5rem;
  position: relative;
  z-index: 2;

  padding: 3.5rem 1.6rem 0 1.5rem;
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
`;
