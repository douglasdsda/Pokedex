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
`;

export const Card = styled.div`
  display: flex;

  flex-direction: row;
  align-items: flex-start;

  height: 240px;
  width: 240px;

  margin: 0 auto;

  background: #3e3b47;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  flex: 1;

  img {
    margin: 0 auto;
    height: 110px;
    width: 110px;
  }
`;
