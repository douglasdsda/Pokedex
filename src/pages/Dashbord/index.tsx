import React, { useState, useEffect } from 'react';

import { Container, ListItens } from './styles';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';

import CardInfo, { propsType } from '../../components/CardInfo';
import { usePokemon } from '../../hooks/pokemons';

interface PropsPokemons {
  id: number;
  idPokemon: number;
  name: string;
  sprite: string;
  types: propsType[];
  familyTree?: number[];
}

const DashBord: React.FC = () => {
  const [search, setSearch] = useState('');

  const { pokemons } = usePokemon();

  const [listPokemons, setListPokemons] = useState<PropsPokemons[]>([]);

  useEffect(() => {
    setListPokemons([...pokemons]);
  }, [pokemons]);

  return (
    <Container>
      <Header />
      <InputSearch
        name="search"
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
        placeHolder="Type the Pokémon name"
      />

      <ListItens>
        {listPokemons && listPokemons.length > 0 ? (
          listPokemons.map((pokemon: PropsPokemons) => {
            return (
              <CardInfo
                key={pokemon.id}
                num={pokemon.id}
                name={pokemon.name}
                sprite={pokemon.sprite}
                types={pokemon.types}
              />
            );
          })
        ) : (
          <h1>Carregando...</h1>
        )}
      </ListItens>
    </Container>
  );
};

export default DashBord;
