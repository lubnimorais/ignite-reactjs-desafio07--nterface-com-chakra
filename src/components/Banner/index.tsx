import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Flex
      width="100%"
      height={["163px", "250px", "250px", "335px"]}
      backgroundImage="url('/images/banner_background.jpg')"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      // não queremos mexer horizontalmente 
      backgroundPosition={["100% 20%", "100% 20%", "100% 30%"]}

    >
      
      <Flex
        width="100%"
        justifyContent={['center', 'space-between']}
        alignItems="center"
        marginX="auto"
        paddingX={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading fontWeight="500" fontSize={['xl', '2l', '2xl', '2xl', '4xl']} color="gray.100">
            5 continentes, <br /> infinitas possibilidades
          </Heading>

          <Text maxWidth={['100%', '100%', '100%', '550px']} fontSize={['0.8rem', 'xl']} color="gray.300" marginTop="5" >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          src="/images/airplane.svg"
          alt="Airplane"
          width={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
          marginLeft="8"
        />
      </Flex>
    </Flex>
  )
}

export { Banner }