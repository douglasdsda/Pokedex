import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: row;

  height: 240px;
  width: 320px;

  padding: 10px;

  background: #3e3b47;
  border-radius: 4px;
  margin: 10px;

  font-style: normal;

  font-size: 24px;
  line-height: 32px;

  cursor: pointer;

  span {
    padding: 8px 1px 8px 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;

  margin-top: 15px;
  padding: 8px 2px;
  width: 100%;

  img {
    height: 101px;
    width: 102px;
    margin: 0 auto;
  }

  strong {
    color: #ff9000;

    width: 100% !important;
  }

  strong + strong::before {
    content: ', ';
    color: #ff9000;
  }
`;

export const Text = styled.span`
  margin-right: 5px;
  color: #f4ede8;
`;
export const Number = styled.span`
  /* identical to box height */

  color: #666360;
`;
export const Num = styled.span`
  color: #666360;
`;
export const Name = styled.h2`
  color: #666360;
`;
export const Types = styled.span`
  color: #666360;
`;
