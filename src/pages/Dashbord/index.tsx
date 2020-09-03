import React, { useState, useEffect, useCallback } from 'react';

import { Container, Main, ListItens } from './styles';
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

  const handleSearch = useCallback(
    (e: number) => {
      if (e === 13) {
        if (search.trim()) {
          const listSearch = listPokemons.filter(pokemon =>
            pokemon.name.toUpperCase().includes(search.toUpperCase()),
          );

          setListPokemons([...listSearch]);
        } else {
          setListPokemons([...pokemons]);
        }
      }
    },
    [search, listPokemons, pokemons],
  );

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;

      if (value.trim()) {
        const listSearch = listPokemons.filter(pokemon =>
          pokemon.name.toUpperCase().includes(value.toUpperCase()),
        );

        setListPokemons([...listSearch]);
      } else {
        setListPokemons([...pokemons]);
      }
    },
    [listPokemons, pokemons],
  );

  return (
    <Container>
      <Header />
      <Main>
        <InputSearch
          name="search"
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
          onKeyPress={e => handleSearch(e.charCode)}
          onKeyUp={handleKeyUp}
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
            <h1>Sem Pokémons...</h1>
          )}
        </ListItens>
      </Main>
    </Container>
  );
};

export default DashBord;
