import React from 'react';
import { render } from '@testing-library/react';

import Details from '../../pages/Details';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useRouteMatch: () => ({ params: 'id' }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/pokemons', () => {
  return {
    usePokemon: () => ({
      setPokemon: () => {
        return {
          idPokemon: 1,
        };
      },
    }),
  };
});

describe('Details Page', () => {
  it('should be able to datails in', async () => {
    const { debug } = render(<Details />);
    debug();
  });
});
