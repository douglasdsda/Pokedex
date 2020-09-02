import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: row;

  height: 240px;
  width: 240px;

  padding: 10px;

  background: #3e3b47;
  border-radius: 4px;
  margin: 10px;
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

  padding: 8px 2px;

  img {
    height: 110px;
    width: 110px;
    margin: 0 auto;
  }
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
