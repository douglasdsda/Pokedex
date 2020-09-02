import React from 'react';

// import { Container, Num, Info, Name, Types } from './styles';

interface PropsCardInfo {
  num: number;
  name: string;
  types: string[];
  sprite: string;
}

const CardInfo: React.FC<PropsCardInfo> = props => {
  return (
    //  <Container>

    //    <Num>{props.num}</Num>
    //   <Info>
    //     <img src={props.sprite} alt={name}/>
    //      <Name>{props.name}<Name />
    //      <Types>{props.types}<Types />
    //   </Info>

    // </Container>
    <h1>teste</h1>
  );
};

export default CardInfo;
