import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import api from '../../services/api';
import CardInfo, { propsType } from '../../components/CardInfo';

const DashBord: React.FC = () => {
  const [search, setSearch] = useState('');
  const [id, setId] = useState(0);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [types, setTypes] = useState<propsType[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await api.get('pokemon/bulbasaur');
      console.log('Data: ', data);
      setName(data.name);
      setId(data.id);
      setImage(data.sprites.other.dream_world.front_default);
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

      <CardInfo num={id} name={name} sprite={image} types={types} />
    </Container>
  );
};

export default DashBord;
