import React from 'react';
import { CardDiv } from './style';
import P from 'prop-types';

function Card({ photo, myWidth, myHeight, mTop, mBottom, tittle, children }) {
  return (
    <CardDiv
      myWidth={myWidth}
      myHeight={myHeight}
      mTop={mTop}
      mBottom={mBottom}
    >
      <img src={photo} alt="image" />
      <div>
        <h1>{tittle}</h1>
        <p>{children}</p>
      </div>
    </CardDiv>
  );
}

export { Card };

Card.propTypes = {
  photo: P.string.isRequired,
  tittle: P.string.isRequired,
  children: P.string.isRequired,
  myWidth: P.number.isRequired,
  myHeight: P.number.isRequired,
  mTop: P.number.isRequired,
  mBottom: P.number.isRequired,
};
