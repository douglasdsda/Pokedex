import React, { useState, useEffect, useCallback } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  Container,
  Main,
  Footer,
  FooterContent,
  Back,
  ListTree,
} from './styles';
import Header from '../../components/Header';

import CardInfo from '../../components/CardInfo';
import { usePokemon, Pokemon, propsTypeIn } from '../../hooks/pokemons';
import api from '../../services/api';
import { formatUpperCase } from '../../utils/utilsHelper';

interface DetailsParams {
  pokemon: string;
}

const Details: React.FC = () => {
  const { pokemons } = usePokemon();

  const { params } = useRouteMatch<DetailsParams>();

  const [pokemon, setPokemon] = useState<Pokemon>();
  const [tree, setTree] = useState<Pokemon[]>([]);

  const getNamesEvelutions = useCallback(async (data: any, myName: string) => {
    let evolution;

    evolution = data;

    const names: string[] = [];
    while (evolution) {
      names.push(evolution.species.name);
      [evolution] = evolution.evolves_to;
    }

    return names.filter(name => name.toUpperCase() !== myName.toUpperCase());
  }, []);

  const setTreePokemons = useCallback(
    async (names: string[], list: Pokemon[]) => {
      for (let index = 0; index < names.length; index += 1) {
        const family = await api.get(`pokemon/${names[index]}`);
        const name = formatUpperCase(family.data.name);
        const formattedTypes = family.data.types.map((item: propsTypeIn) => {
          return { ...item, name: formatUpperCase(item.type.name) };
        });

        const item = {
          id: family.data.id,
          name,
          sprite: family.data.sprites.other.dream_world.front_default,
          idPokemon: family.data.id,
          types: formattedTypes,
          stats: family.data.stats,
          weight: family.data.weight,
          height: family.data.height,
        };

        list.push(item);
      }
    },
    [],
  );

  useEffect(() => {
    const checkPokemon = pokemons.filter(item => item.name === params.pokemon);
    if (checkPokemon && checkPokemon.length === 1) {
      const data = checkPokemon[0];

      setPokemon(data);

      const load = async () => {
        const species = await api.get(`pokemon-species/${data.idPokemon}/`);
        const evulutions = await api.get(species.data.evolution_chain.url);

        const names = await getNamesEvelutions(
          evulutions.data.chain,
          data.name,
        );
        const list: Pokemon[] = [];
        await setTreePokemons(names, list);
        setTree([...list]);
      };

      load();
    }
  }, [pokemons, params.pokemon, getNamesEvelutions, setTreePokemons]);

  return (
    <Container>
      <Header />
      <Main>
        <Back>
          <Link to="/">
            <FiArrowLeft />
            <span>Back</span>
          </Link>
        </Back>

        {pokemon && (
          <CardInfo
            containerStyle={{ margin: '0 auto' }}
            key={pokemon.id}
            num={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprite}
            types={pokemon.types}
            weight={pokemon.weight}
            height={pokemon.height}
            phys
            status
            stats={pokemon.stats}
          />
        )}
      </Main>
      <Footer>
        <h2>Family Tree</h2>
        <FooterContent />
        <ListTree>
          {tree.map((item: Pokemon) => {
            return (
              <CardInfo
                key={item.id}
                num={item.id}
                name={item.name}
                sprite={item.sprite}
                types={item.types}
                titleAndSubTitle
              />
            );
          })}
        </ListTree>
      </Footer>
    </Container>
  );
};

export default Details;
