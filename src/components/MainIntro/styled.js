import styled from 'styled-components';

export const MainIntroContent = styled.div`
  width: 100%;
  height: 55.22rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80vw;
    height: 21.42rem;
    margin-top: 5.4rem;
    margin-left: -0.1rem;
  }
  @media (min-width: 374px) {
    img {
      width: 30rem;
    }
  }
`;
