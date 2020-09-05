import React from 'react';
import { render } from '@testing-library/react';
import Dashbord from '../../pages/Dashbord';

const mockedHistoryPush = jest.fn();

const mockedupdateList = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/pokemons', () => {
  return {
    usePokemon: () => ({
      pokemons: [],
      updateList: mockedupdateList,
    }),
  };
});

describe('Dashbord Page', () => {
  it('should be able to dashbord in', () => {
    const { debug } = render(<Dashbord />);

    debug();
  });
});
