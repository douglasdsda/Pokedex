import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  height: 56px;
  width: 100%;

  padding: 16px;

  background-color: #232129;

  border: 2px solid #232129;
  border-radius: 8px;
  display: flex;

  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;

    color: #666360;
  }

  span {
    font-size: 16px;

    display: flex;
    flex-direction: column;

    justify-content: center;
    width: 100%;

    label {
      font-size: 10px;
      color: #666360;
      font-weight: bold;
    }

    input {
      outline: 0;
      flex: 1;
      border: 0;
      background-color: #232129;

      font-family: Roboto Slab;

      &::placeholder {
        color: #666360;
      }

      color: #666360;
      border-bottom: none;
    }
  }
`;
