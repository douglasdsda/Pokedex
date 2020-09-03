import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import api from '../services/api';

interface propsTypeIn {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface StatsBase {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface propsType {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  idPokemon: number;
  name: string;
  sprite: string;
  types: propsType[];
  familyTree?: number[];
  stats: StatsBase[];
}

interface PokemonContextData {
  pokemons: Pokemon[];
  getPokemons(): void;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider: React.FC = ({ children }) => {
  const [listPokemons, setListPokemons] = useState<Pokemon[]>([]);

  const formatUpperCase = useCallback((text: string) => {
    const value = text
      .toString()
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, function (a: string) {
        return a.toUpperCase();
      });
    return value;
  }, []);

  const setPokemon = useCallback(
    async (index: number, list: Pokemon[]) => {
      const { data } = await api.get(`pokemon/${index}`);
      const name = formatUpperCase(data.name);
      const formattedTypes = data.types.map((item: propsTypeIn) => {
        return { ...item, name: formatUpperCase(item.type.name) };
      });
      const item = {
        id: index,
        name,
        sprite: data.sprites.other.dream_world.front_default,
        idPokemon: data.id,
        types: formattedTypes,
        stats: data.stats,
      };

      list.push(item);
    },
    [formatUpperCase],
  );

  useEffect(() => {
    const load = async () => {
      let list: Pokemon[] = [];
      const listLocal = localStorage.getItem('@DesafioPokemonDouglas:pokemons');
      if (listLocal) {
        list = [...JSON.parse(listLocal)];
        setListPokemons([...list]);
      } else {
        for (let index = 1; index < 150; index += 1) {
          await setPokemon(index, list);
        }

        localStorage.setItem(
          '@DesafioPokemonDouglas:pokemons',
          JSON.stringify(list),
        );
        setListPokemons([...list]);
      }
    };
    load();
  }, [setPokemon]);

  const getPokemons = useCallback(() => {
    return listPokemons;
  }, [listPokemons]);

  return (
    <PokemonContext.Provider value={{ pokemons: listPokemons, getPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };
