import { Grid, GridItem } from '@chakra-ui/react';

import { TravelTypeItem } from './TravelTypeItem';

const TravelTypes = () => {
  return (
    <Grid
      templateColumns={['1f 1f', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      gap={[1, 5]}
      width="100%"
      maxWidth="1160px"
      justifyContent="space-between"
      alignItems="center"
      marginTop={['10', '32']}
      marginX="auto"
    >
      <GridItem>
        <TravelTypeItem icon='cocktail' title='vida noturna' />
      </GridItem>

      <GridItem>
        <TravelTypeItem icon='surf' title='praia' />
      </GridItem>
      
      <GridItem>
        <TravelTypeItem icon='building' title='moderno' />
      </GridItem>
      
      <GridItem>
        <TravelTypeItem icon='museum' title='clássico' />
      </GridItem>
      
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelTypeItem icon='earth' title='e mail...' />
      </GridItem>
    </Grid>
  )
}

export { TravelTypes }