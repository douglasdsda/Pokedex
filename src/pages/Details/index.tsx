import React, { useState, useEffect } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  Container,
  Main,
  Card,
  CardMain,
  CardHeader,
  CardHeaderInfo,
  CardStatus,
  StatusBar,
  StatusBarRank,
  StatusBarValue,
  Footer,
  FooterContent,
} from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import CardInfo, { propsType } from '../../components/CardInfo';
import { usePokemon } from '../../hooks/pokemons';

interface DetailsParams {
  pokemon: string;
}

interface StatsBase {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

const Details: React.FC = () => {
  const { pokemons } = usePokemon();

  const [name, setName] = useState('');
  const [sprite, setSprite] = useState('');
  const [stats, setStats] = useState<StatsBase[]>([]);
  const { params } = useRouteMatch<DetailsParams>();
  const [types, setTypes] = useState<propsType[]>([]);

  useEffect(() => {
    const checkPokemon = pokemons.filter(item => item.name === params.pokemon);
    if (checkPokemon && checkPokemon.length > 0) {
      const pokemon = checkPokemon[0];
      setName(pokemon.name);
      setSprite(pokemon.sprite);
      setStats(pokemon.stats);
      setTypes(pokemon.types);
    }
  }, [pokemons]);

  return (
    <Container>
      <Header />
      <Main>
        <div>
          <Link to="/">
            <FiArrowLeft />
          </Link>
        </div>
        <Card>
          <span>#1</span>
          <CardMain>
            <CardHeader>
              <img src={sprite} alt={name} />
              <span>{name}</span>
              <CardHeaderInfo>
                <div>
                  <span>69 KG</span>
                  <span>Weight</span>
                </div>

                <div>
                  <span>0.7 M</span>
                  <span>Height</span>
                </div>
              </CardHeaderInfo>
            </CardHeader>

            <CardStatus>
              <h2>Stats</h2>
              {stats.map(item => {
                return (
                  <StatusBar key={item.stat.url}>
                    <span>{item.stat.name}</span>
                    <StatusBarRank>
                      <StatusBarValue valueWidth={item.base_stat}>
                        <span>{item.base_stat}/100</span>
                      </StatusBarValue>
                    </StatusBarRank>
                  </StatusBar>
                );
              })}
            </CardStatus>
          </CardMain>
        </Card>
      </Main>
      <Footer>
        <h2>Family Tree</h2>
        <FooterContent>
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Details;
