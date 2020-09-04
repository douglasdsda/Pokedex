import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import {
  Container,
  CardHeader,
  Info,
  Text,
  Number,
  CardHeaderInfo,
  ItemStatusPhys,
  PyhysItem,
  CardStatus,
  StatusBar,
  StatusBarRank,
  StatusBarValue,
} from './styles';
import { StatsBase } from '../../hooks/pokemons';

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
  types?: propsType[];
  sprite: string;
  titleAndSubTitle?: boolean;
  status?: boolean;
  phys?: boolean;
  stats?: StatsBase[];
  containerStyle?: Record<string, unknown>;
  weight?: string;
  height?: string;
}

const CardInfo: React.FC<PropsCardInfo> = props => {
  const history = useHistory();

  const handleDetails = useCallback(() => {
    history.push(`/Details/${props.name}`);
  }, [history, props.name]);

  return (
    <Container style={props.containerStyle} status onClick={handleDetails}>
      <CardHeader>
        <Number>#{props.num}</Number>
        <Info>
          <img src={props.sprite} alt={props.name} />
          {props.titleAndSubTitle ? (
            <>
              <span>
                <Text>Name:</Text> <strong>{props.name}</strong>
              </span>
              <div>
                <Text>Types:</Text>
                {props.types &&
                  props.types.map((item: propsType) => {
                    return <strong key={Math.random()}>{item.name}</strong>;
                  })}
              </div>
            </>
          ) : (
            <strong>{props.name}</strong>
          )}
          {props.phys && (
            <CardHeaderInfo>
              <ItemStatusPhys>
                <span>{props.weight} KG</span>
                <PyhysItem>Weight</PyhysItem>
              </ItemStatusPhys>

              <ItemStatusPhys>
                <span>{props.height} M</span>
                <PyhysItem>Height</PyhysItem>
              </ItemStatusPhys>
            </CardHeaderInfo>
          )}
        </Info>
      </CardHeader>
      {props.status && (
        <CardStatus>
          <h2>Stats</h2>
          {props.stats &&
            props.stats.map(item => {
              return (
                <StatusBar key={item.stat.url}>
                  <span>{item.stat.name}</span>
                  <StatusBarRank>
                    <StatusBarValue valueWidth={item.base_stat}>
                      <span>{item.base_stat}/100</span>
                    </StatusBarValue>
                  </StatusBarRank>
                </StatusBar>
              );
            })}
        </CardStatus>
      )}
    </Container>
  );
};

export default CardInfo;
