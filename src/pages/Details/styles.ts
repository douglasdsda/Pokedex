import styled, { css } from 'styled-components';

interface StatusBarValueProps {
  valueWidth: number;
}

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

  width: 240px;

  margin: 0 auto;

  background: #3e3b47;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;
`;

export const CardHeader = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  flex: 1;

  padding: 0 30px;

  img {
    margin: 0 auto;
    height: 110px;
    width: 110px;
    margin-bottom: 10px;
  }
`;

export const CardHeaderInfo = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
`;

export const CardStatus = styled.div`
  margin-top: 15px;
  h2 {
    text-align: center;
    font-size: 14px;
    color: #ff9000;
  }
`;
export const StatusBar = styled.div`
  display: flex;

  width: 100%;

  flex-direction: row;

  align-items: flex-end;
`;
export const StatusBarRank = styled.div`
  width: 100%;
  border-radius: 8px;
  margin-left: 5px;
  background-color: #fff;
  flex: 1;
  height: 15px;
`;

export const StatusBarValue = styled.div<StatusBarValueProps>`
  border-radius: 8px;

  background-color: #ff9000;
  flex: 1;
  height: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  span {
    font-size: 12px;
    padding: 0 5px;
  }

  ${props =>
    css`
      width: ${props.valueWidth}%;
    `}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  width: 99%;
`;
