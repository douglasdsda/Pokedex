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
    async (listNames: any) => {
      let index = 0;

      const list: PropsPokemons[] = [];

      await listNames.map(async (pokemon: PropsPokemons) => {
        const pokemonRecord = await api.get(`pokemon/${pokemon.name}`);
        const { data } = pokemonRecord;
        const item = {
          id: index,
          name: data.name,
          sprite: data.sprites.other.dream_world.front_default,
          idPokemon: data.id,
          types: data.types,
        };

        list.push(item);

        index += 1;

        return pokemonRecord;
      });

      setTimeout(() => {
        setListPokemons([...list]);
      }, 600);
    },
    [setListPokemons],
  );

  useEffect(() => {
    const load = async () => {
      const { data } = await api.get(`pokemon`);
      setPokemon(data.results);
    };
    load();
  }, []);

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
        {listPokemons.map((pokemon: PropsPokemons) => {
          return (
            <CardInfo
              key={pokemon.id}
              num={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprite}
              types={pokemon.types}
            />
          );
        })}
      </ListItens>
    </Container>
  );
};

export default DashBord;
