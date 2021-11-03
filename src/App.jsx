import React from 'react';
import { GlobalStyle, Conteiner, Logo } from './global';
import desktopBackground from './assets/images/bg-hero-desktop.svg';
import mobileBackground from './assets/images/bg-hero-mobile.svg';
import { Content } from './pages/Content';

function App() {
  const widthSize = window.screen.width;
  return (
    <>
      <GlobalStyle />
      <Conteiner widthSize={widthSize}>
        <Logo
          src={widthSize > 1023 ? desktopBackground : mobileBackground}
          alt="background image"
        />
        <Content />
      </Conteiner>
    </>
  );
}

export default App;
