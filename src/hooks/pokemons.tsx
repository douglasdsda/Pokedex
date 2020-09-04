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
  weight: string;
  height: string;
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

  const formatNameStat = useCallback((name: string) => {
    if (name === 'hp') return 'HP';
    if (name === 'attack') return 'ATK';
    if (name === 'defense') return 'DEF';
    return 'SPD';
  }, []);

  const setPokemon = useCallback(
    async (index: number, list: Pokemon[]) => {
      const { data } = await api.get(`pokemon/${index}`);
      const name = formatUpperCase(data.name);
      const formattedTypes = data.types.map((item: propsTypeIn) => {
        return { ...item, name: formatUpperCase(item.type.name) };
      });

      const formattedStats = data.stats.filter((item: StatsBase) => {
        if (!item.stat.name.includes('special')) {
          const stats = {
            base_stat: item.base_stat,
            effort: item.effort,
            stat: {
              name: formatNameStat(item.stat.name),
              url: item.stat.url,
            },
          };

          return {
            ...stats,
          };
        }
        return undefined;
      });

      const item = {
        id: index,
        name,
        sprite: data.sprites.other.dream_world.front_default,
        idPokemon: data.id,
        types: formattedTypes,
        stats: formattedStats,
        weight: data.weight,
        height: data.height,
      };

      list.push(item);
    },
    [formatUpperCase, formatNameStat],
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
