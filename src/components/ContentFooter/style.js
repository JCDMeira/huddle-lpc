import styled from 'styled-components';

export const ContentFooterDiv = styled.div`
  /* width: 33.9rem; */
  width: 90.4vw;
  height: 66.1rem;
  @media (min-width: 1024px) {
    width: 86.52777777777779vw;
    height: 30.1rem;
  }
`;

export const LogoFooter = styled.img`
  margin-bottom: 0.5rem;
  @media (min-width: 1024px) {
    width: 23.8rem;
    height: 3.9rem;
    margin-bottom: 2.2rem;
    margin-left: 0.2rem;
  }
`;

export const PCopy = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
  text-align: center;
  margin-left: 0.9rem;
  margin-top: 1.6rem;

  color: #ffffff;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: right;
    margin-right: 0.3rem;
    margin-top: 3.2rem;
  }
`;
