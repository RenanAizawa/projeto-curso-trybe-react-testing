import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente FavoritePokemons', () => {
  it('verificar se a mensagem correta é rendenizada corretamente', () => {
    const { history } = renderWithRouter(<App />);
    history.push('favorites');
    const mensagem = screen.getByText(/No favorite pokemon found/i);
    expect(mensagem).toBeInTheDocument();
  });
});
