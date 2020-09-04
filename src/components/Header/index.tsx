import React from 'react';

import { Container } from './styles';
import pokebola from '../../assets/pokebola.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={pokebola} alt="Pokébola" />
      <h1>POKÉMON CHALLENGE</h1>
    </Container>
  );
};

export default Header;
