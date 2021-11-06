import React from 'react';
import { GlobalStyle, Conteiner, BackImage } from './global';
import desktopBackground from './assets/images/bg-hero-desktop.svg';
import mobileBackground from './assets/images/bg-hero-mobile.svg';
import { Content } from './pages/Content';
import { Footer } from './pages/Footer';

function App() {
  const widthSize = window.screen.width;
  return (
    <>
      <GlobalStyle />
      <Conteiner widthSize={widthSize}>
        <BackImage
          src={widthSize > 1023 ? desktopBackground : mobileBackground}
          alt="background image"
        />
        <Content />
        <Footer />
      </Conteiner>
    </>
  );
}

export default App;
