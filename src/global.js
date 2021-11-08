import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}
`;

export const Conteiner = styled.div`
  width: 100%;
  height: 339.823rem;

  @media (min-width: 1023px) {
    height: 318.6rem;
  }
`;

export const BackImage = styled.img`
  width: 100%;
  max-height: 71.6rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  @media (min-width: 1023px) {
    max-height: 71.8rem;
  }
`;
