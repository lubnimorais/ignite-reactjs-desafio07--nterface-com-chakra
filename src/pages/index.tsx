import { Box, Heading } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Box>

      <Banner />
      <TravelTypes />

      <Box 
        width={['60px', '90px']}
        height="2px"
        marginX='auto'
        marginY={['9', '20']}
        backgroundColor="gray.700"
      />

      <Heading
        textAlign="center"
        fontWeight="500"
        fontSize={['lg', '3xl', '4xl']}
        marginBottom={['5', '14']}
      >
        Vamos nessa?<br />Então escolha seu continente
      </Heading>

      <Slider />
    </Box>
  )
}
