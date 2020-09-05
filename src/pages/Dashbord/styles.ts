import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;
export const Main = styled.div`
  padding: 0 30px;
  margin: 0 auto;
`;
export const ListItens = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const NotFound = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin: 50px;
`;

export const ButtonFloating = styled.div`
  position: fixed;
  height: 90px;
  width: 90px;

  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 50px;
  right: 50px;

  border-radius: 50%;
  color: #fff;
  background-color: #ff9000;

  border: 1px solid #ff9055;

  cursor: pointer;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
