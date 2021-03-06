# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is the front-end mentor's seventh challenge. The challenge is to build the "Huddle landing page" and make it as close to the design as possible. Building the desing with whatever you want to finish, any language, framework or tools.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## Screenshot

### Mobile design

<p  align="center">
  <img width="300px" src="./presentation/mobile.png" align="center"></img>
</p>

### Tablets design

<p  align="center"><img width="420px"  src="./presentation/i-pad.png" align="center"></img></p>

### Desktop design

<p  align="center"><img width="720px" src="./presentation/desktop.png" align="center"></img></p>

### result of my work

<p  align="center"><img width="1080px" src="./presentation/design-x-myWork.gif" align="center"></img></p>
<p  align="center"><img width="1080px" src="./presentation/design-x-myWork1.gif" align="center"></img></p>
<p  align="center"><img width="1080px" src="./presentation/design-x-myWork2.gif" align="center"></img></p>

### Links

- Solution URL: [My solution for this challenge](https://www.frontendmentor.io/solutions/huddle-lpc-with-reactjs-react-icons-and-styledcomponents-LodyOpXBw)
- Live Site URL: [check the result](https://jcdmeira-huddle-lpc.netlify.app)
- My figma design: [Figma](https://www.figma.com/file/zXmDHuI6GzMNPK0QWSFMWW/12-Huddle-lp?node-id=0%3A1)

## My process

### Built with

- Mobile-first workflow
- [Styled components](https://styled-components.com) - CSS in js with stiled components
- [React](https://reactjs.org/) - JS library

### What I learned

By importing the IconContext from react-icons it is possible to use the provider, accessed by IconContext.Provider. Then passing a properties object to the "value" parameter. Due to the provider the component will accept the hover effect.

```jsx
import { IconContext } from 'react-icons';
import { RiFacebookFill } from 'react-icons/ri';

function MainFooter() {
  return (
    <IconContext.Provider value={{ size: 18 }}>
      <div>
        <RiFacebookFill />
      </div>
    </IconContext.Provider>
  );
}

export { MainFooter };
```

```js
import styled from 'styled-components';

export const Social = styled.div`
  div {
    width: 3rem;
    height: 3rem;

    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #fff;
    }
    :hover {
      cursor: pointer;
      border: 1px solid #ff52bf;
      svg {
        color: #ff52bf;
      }
    }
  }
`;
```

### Useful resources

- [react tutorial](https://pt-br.reactjs.org/tutorial/tutorial.html) - This helped me structure the components and build the proposed page.
- [my figma design](https://www.figma.com/file/zXmDHuI6GzMNPK0QWSFMWW/12-Huddle-lp?node-id=0%3A1) - My figma design for help anyone who wants to build this challenge.
- [CSS units conversor - px to VH/VW/REM](https://it-news.pw/pxtovh/) - CSS units conversor .
- [Converting Colors](https://convertingcolors.com) - HSL for all color systems.

## Author

- Personal Page - [Jean Carlos De Meira](https://jcdmeira.github.io)
- Frontend Mentor - [@JCDMeira](https://www.frontendmentor.io/profile/JCDMeira)
- Instagram - [@jean.meira10](https://www.instagram.com/jean.meira10/)
- GitHub - [JCDMeira](https://github.com/JCDMeira)
