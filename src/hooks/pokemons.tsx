import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import api from '../services/api';
import { formatUpperCase, formatNameStat } from '../utils/utilsHelper';

export interface propsTypeIn {
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
  updateList(listInical?: Pokemon[], current?: number): void;
  setPokemon(index: number): Promise<Pokemon>;
}

const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider: React.FC = ({ children }) => {
  const [listPokemons, setListPokemons] = useState<Pokemon[]>([]);

  const setPokemon = useCallback(async (index: number): Promise<Pokemon> => {
    const { data } = await api.get(`pokemon/${index}`);
    const name = formatUpperCase(data.name);
    const formattedTypes = data.types.map((item: propsTypeIn) => {
      return { ...item, name: formatUpperCase(item.type.name) };
    });

    const auxStats = data.stats.filter((item: StatsBase) => {
      if (!item.stat.name.includes('special')) {
        return { ...item };
      }
      return undefined;
    });

    const formattedStats = auxStats.map((item: StatsBase) => {
      return {
        base_stat: item.base_stat,
        effort: item.effort,
        stat: {
          name: formatNameStat(item.stat.name),
          url: item.stat.url,
        },
      };
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

    return item;
  }, []);

  const updateList = useCallback(
    async (listInical?: Pokemon[], current?: number) => {
      let list: Pokemon[] = [];
      if (listInical) list = [...listInical];

      const numerforFor = current || 1;

      for (let index = numerforFor; index < numerforFor + 20; index += 1) {
        const item = await setPokemon(index);
        list.push(item);
        setListPokemons([...list]);
      }
    },
    [setPokemon],
  );

  useEffect(() => {
    const load = async () => {
      await updateList();
    };
    load();
  }, [updateList]);

  const getPokemons = useCallback(() => {
    return listPokemons;
  }, [listPokemons]);

  return (
    <PokemonContext.Provider
      value={{ pokemons: listPokemons, getPokemons, updateList, setPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

function usePokemon(): PokemonContextData {
  const context = useContext(PokemonContext);

  return context;
}

export { PokemonProvider, usePokemon };
