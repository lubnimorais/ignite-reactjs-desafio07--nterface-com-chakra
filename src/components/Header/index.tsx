import { Flex, Grid, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="header"
      width="100%"
      height={["50px", "100px"]}
      align="center"
      justify="center"
      marginX="auto"
      paddingX="6"
      bg="white"
    >

      <Grid
        width="100%"
        maxWidth={1160}
        height="100%"
        marginX="auto"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >

        <Image width={['81px', "184px"]} 
          src="/images/logo.png" 
          alt="worldtrip" 
          justifySelf="center" 
          gridColumn="2" 
        />

      </Grid>

      

    </Flex>
  )
}

export { Header }