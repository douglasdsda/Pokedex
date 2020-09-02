import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Info } from './styles';

export interface propsType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
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
      <span>#{props.num}</span>
      <Info>
        <img src={props.sprite} alt={props.name} />
        <span>Name: {props.name}</span>
        <div>
          Types:
          {props.types.map((item: propsType) => {
            return <strong key={item.slot}>{item.type.name}</strong>;
          })}
        </div>
      </Info>
    </Container>
  );
};

export default CardInfo;
