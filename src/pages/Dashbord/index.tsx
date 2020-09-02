import React, { useState, useEffect } from 'react';

import { Container, Info, Card } from './styles';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import api from '../../services/api';

interface propsType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const DashBord: React.FC = () => {
  const [search, setSearch] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [types, setTypes] = useState<propsType[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await api.get('pokemon/ditto');

      setName(data.name);
      console.log('types: ', data.types[0]);
      setImage(data.sprites.back_default);
      setTypes(data.types);
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

      <Card>
        <span>#1</span>
        <Info>
          <img src={image} alt={name} />
          <span>Name: {name}</span>
          <span>
            Types:
            {types.map((item: propsType) => {
              return <span key={item.slot}>{item.type.name}</span>;
            })}
          </span>
        </Info>
      </Card>
    </Container>
  );
};

export default DashBord;
