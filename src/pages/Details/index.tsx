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
  const [name, setName] = useState('');
  const [sprite, setSprite] = useState('');
  const [stats, setStats] = useState<StatsBase[]>([]);
  const { params } = useRouteMatch<DetailsParams>();
  const [types, setTypes] = useState<propsType[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await api.get(`pokemon/${params.pokemon}`);
      console.log('Data: ', data);
      setName(data.name);
      setTypes(data.types);

      setSprite(data.sprites.other.dream_world.front_default);
      const list = data.stats.filter((item: StatsBase) => {
        if (!item.stat.name.includes('special')) {
          return { ...item };
        }
        return undefined;
      });
      setStats(list);
    };

    load();
  }, [params.pokemon]);

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
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
          <CardInfo num={1} name={name} sprite={sprite} types={types} />
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Details;
