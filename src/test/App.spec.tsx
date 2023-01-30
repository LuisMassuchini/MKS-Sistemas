import { ChakraProvider, theme } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { store } from '../store/productStore';

describe('Header', () => {
  it('MKs text Header', () => {
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Header />
        </Provider>
      </ChakraProvider>,
    );

    expect(screen.getByText('MKS')).toBeInTheDocument();
    expect(screen.getByText('Sistemas')).toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('MKs text Footer', () => {
    render(
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Footer />
        </Provider>
      </ChakraProvider>,
    );

    expect(
      screen.getByText('MKS sistemas © Todos os direitos reservados'),
    ).toBeInTheDocument();
  });
});
