import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Info, Text, Number } from './styles';

export interface propsTypeIn {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface propsType {
  name: string;
  url: string;
}

interface PropsCardInfo {
  num: number;
  name: string;
  types: propsType[];
  sprite: string;
}

const CardInfo: React.FC<PropsCardInfo> = props => {
  const history = useHistory();

  const handleDetails = useCallback(() => {
    history.push(`/Details/${props.name}`);
  }, [history, props.name]);

  return (
    <Container onClick={handleDetails}>
      <Number>#{props.num}</Number>
      <Info>
        <img src={props.sprite} alt={props.name} />
        <span>
          <Text>Name:</Text> <strong>{props.name}</strong>
        </span>
        <div>
          <Text>Types:</Text>
          {props.types.map((item: propsType) => {
            return <strong key={item.name}>{item.name}</strong>;
          })}
        </div>
      </Info>
    </Container>
  );
};

export default CardInfo;
