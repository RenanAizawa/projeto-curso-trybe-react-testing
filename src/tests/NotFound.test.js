import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente NotFound', () => {
  it('página contém um heading h2 com o texto "Page requested not found 😭"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('not-found');
    const title = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
    expect(title).toBeInTheDocument();
  });
  it('verificando se a imagem correta esta sendo rendenizada', () => {
    const { history, getByAltText } = renderWithRouter(<App />);
    history.push('/not-found');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const altImg = 'Pikachu crying because the page requested was not found';
    const image = getByAltText(altImg);
    expect(image).toHaveAttribute('src', url);
  });
});
