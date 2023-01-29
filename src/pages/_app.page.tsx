import '../styles/index.css';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import React from 'react';
import { theme } from '../styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux'
import { store } from '../store/productStore';


export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
      <Provider store={store}>
      {/* <PersistGate loading={<> </>} persistor={persistor}> */}
        <Flex w="100vw" >
          <Component {...pageProps} />
        </Flex>
        {/* </PersistGate> */}
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
