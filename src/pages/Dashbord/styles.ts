import styled from 'styled-components';

export const Container = styled.div``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const Card = styled.div`
  display: flex;

  flex-direction: row;

  height: 240px;
  width: 240px;

  background: #3e3b47;
  border-radius: 4px;
  margin: 10px;

  span {
    padding: 8px 1px 8px 8px;
  }
`;
