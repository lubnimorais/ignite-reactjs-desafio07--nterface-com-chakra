import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Box>

      <Banner />  

     <TravelTypes />
    </Box>
  )
}
