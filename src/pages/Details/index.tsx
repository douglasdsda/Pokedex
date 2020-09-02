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
} from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

interface DetailsParams {
  pokemon: string;
}

const Details: React.FC = () => {
  const [name, setName] = useState('');
  const [sprite, setSprite] = useState('');
  const { params } = useRouteMatch<DetailsParams>();
  useEffect(() => {
    const load = async () => {
      const { data } = await api.get(`pokemon/${params.pokemon}`);
      console.log('Data: ', data);
      setName(data.name);

      setSprite(data.sprites.other.dream_world.front_default);
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
              <StatusBar>
                <span>HP</span>
                <StatusBarRank>
                  <StatusBarValue valueWidth={56}>
                    <span>56/100</span>
                  </StatusBarValue>
                </StatusBarRank>
              </StatusBar>
            </CardStatus>
          </CardMain>
        </Card>
      </Main>
    </Container>
  );
};

export default Details;
