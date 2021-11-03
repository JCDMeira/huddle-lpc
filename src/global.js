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
`;

export const Logo = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-z-index: 1;
`;
