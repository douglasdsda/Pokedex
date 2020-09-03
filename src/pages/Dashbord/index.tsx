import React, { useState, useEffect, useCallback } from 'react';

import { Container, ListItens } from './styles';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import api from '../../services/api';
import CardInfo, { propsType } from '../../components/CardInfo';

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

  const [listPokemons, setListPokemons] = useState<PropsPokemons[]>([]);

  const setPokemon = useCallback(
    async (index: number, list: PropsPokemons[]) => {
      const { data } = await api.get(`pokemon/${index}`);

      const item = {
        id: index,
        name: data.name,
        sprite: data.sprites.other.dream_world.front_default,
        idPokemon: data.id,
        types: data.types,
      };

      list.push(item);
    },
    [],
  );

  useEffect(() => {
    const load = async () => {
      const list: PropsPokemons[] = [];
      for (let index = 1; index < 150; index += 1) {
        await setPokemon(index, list);
      }
      setListPokemons([...list]);
    };
    load();
  }, [setPokemon]);

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
