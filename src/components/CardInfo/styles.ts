import styled, { css } from 'styled-components';

interface PropsCard {
  titleAndSubTitle?: boolean;
}

interface StatusBarValueProps {
  valueWidth: number;
}

interface PropsContainer {
  status: boolean;
}

export const Container = styled.div<PropsContainer>`
  padding: 10px;

  display: block;

  width: 320px;

  background: #3e3b47;
  border-radius: 4px;

  margin: 20px 50px 56px 0px;

  cursor: pointer;

  span > {
    padding: 8px 1px 8px 8px;
  }

  ${props =>
    !props.status &&
    css`
      height: 240px;
    `}

  &:last-child {
  }

  @media (max-width: 600px) {
    width: 100vw;
    margin: 20px 0px 20px 0px;
  }
`;
export const CardHeader = styled.div`
  display: flex;

  flex-direction: row;
`;

export const Info = styled.div<PropsCard>`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;

  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;

  margin-top: 15px;
  padding: 8px 2px;
  width: 100%;

  img {
    height: 101px;
    width: 102px;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  strong {
    color: #ff9000;
    text-align: center;

    width: 100% !important;
    line-height: 32px;
  }

  strong + strong::before {
    content: ', ';
    color: #ff9000;
  }

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const Text = styled.span`
  margin-right: 5px;
  color: #f4ede8;
  line-height: 32px;
`;
export const Number = styled.span`
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

export const CardHeaderInfo = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;

  div {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
`;
export const ItemStatusPhys = styled.div`
  margin-top: 10px;
  color: #f4ede8;
`;
export const PyhysItem = styled.div`
  color: #666360;

  font-size: 13px;
  line-height: 24px;
`;
export const CardStatus = styled.div`
  h2 {
    margin-bottom: 15px;
    text-align: center;
    font-size: 14px;
  }
`;
export const StatusBar = styled.div`
  display: flex;

  width: 100%;

  flex-direction: row;
  padding: 2px 10px;

  justify-content: space-between;

  align-items: center;
`;
export const StatusBarRank = styled.span`
  width: 100%;
  max-width: 240px;
  border-radius: 8px;
  margin-left: 5px;
  background-color: #fff;
  flex: 1;
  height: 18px;
  align-items: flex-end;
`;
export const StatusBarValue = styled.span<StatusBarValueProps>`
  border-radius: 8px;

  background-color: #ff9000;
  flex: 1;
  height: 18px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  span {
    font-size: 12px;
    padding: 0 5px;
  }

  ${props =>
    css`
      width: ${props.valueWidth > 100 ? 100 : props.valueWidth}%;
    `}
`;
