import React, { useState, useEffect } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Main, Footer, FooterContent, Back } from './styles';
import Header from '../../components/Header';

import CardInfo from '../../components/CardInfo';
import { usePokemon, Pokemon } from '../../hooks/pokemons';

interface DetailsParams {
  pokemon: string;
}

const Details: React.FC = () => {
  const { pokemons } = usePokemon();

  const { params } = useRouteMatch<DetailsParams>();

  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const checkPokemon = pokemons.filter(item => item.name === params.pokemon);
    if (checkPokemon && checkPokemon.length === 1) {
      const data = checkPokemon[0];

      setPokemon(data);
    }
  }, [pokemons, params.pokemon]);

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
        <FooterContent>
          {pokemon && (
            <CardInfo
              num={1}
              name={pokemon.name}
              sprite={pokemon.sprite}
              types={pokemon.types}
              titleAndSubTitle
            />
          )}
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Details;
