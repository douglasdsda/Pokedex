import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  padding: 8px 30px;
  display: flex;
  flex-direction: row;

  div {
    svg {
      color: #ff9000;
      height: 24px;
      width: 24px;
    }
  }

  @media (max-width: 600px) {
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  width: 99%;
`;

export const Back = styled.div`
  color: #ff9000;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;

  display: flex;
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    margin: 20px auto;
  }
`;

export const ListTree = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  flex-wrap: wrap;
`;
