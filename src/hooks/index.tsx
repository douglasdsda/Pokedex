import React from 'react';
import { PokemonProvider } from './pokemons';

const AppProvider: React.FC = ({ children }) => (
  <PokemonProvider>{children}</PokemonProvider>
);

export default AppProvider;
