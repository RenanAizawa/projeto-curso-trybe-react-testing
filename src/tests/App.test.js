import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o App.js', () => {
  it('Verificar se o topo da aplicação contem três links', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    const about = screen.getByRole('link', { name: /About/i });
    const pokeFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(pokeFavorite).toBeInTheDocument();
  });
  it('Verificando o direcionamento das paginas', () => {
    const { history } = renderWithRouter(<App />);

    userEvent.click(screen.getByRole('link', { name: /Home/i }));
    const home = screen.getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(home).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', { name: /About/i }));
    const about = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(about).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', { name: /Favorite Pokémons/i }));
    const favorite = screen.getByRole('heading', { name: /Favorite pokémons/i, leve: 2 });
    expect(favorite).toBeInTheDocument();

    history.push('teste');
    const page404 = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2 });
    expect(page404).toBeInTheDocument();
  });
});
