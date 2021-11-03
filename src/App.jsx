import React from 'react';
import { GlobalStyle, Conteiner } from './global';
import desktopBackground from './assets/images/bg-hero-desktop.svg';
import mobileBackground from './assets/images/bg-hero-mobile.svg';

function App() {
  const widthSize = window.screen.width;
  return (
    <>
      <GlobalStyle />
      <Conteiner widthSize={widthSize}>
        <img
          src={widthSize > 1023 ? desktopBackground : mobileBackground}
          alt="background image"
        />
        <h1>Hello world</h1>
      </Conteiner>
    </>
  );
}

export default App;
