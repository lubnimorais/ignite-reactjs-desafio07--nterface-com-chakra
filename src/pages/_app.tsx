import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

import { Header } from '../components/Header';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../styles/slider.scss';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme} >
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
