import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const City = () => {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image 
        width="100%" 
        height="170px" 
        src="/images/londres.png" 
        alt="Londres" 
        />
      <Flex 
        padding="6" 
        align="center" 
        justify='space-between'
        backgroundColor="white"
        borderWidth="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading
            fontSize="xl"
            fontWeight="500"
          >
            Londres
          </Heading>
          <Text marginTop="3" fontSize="md" fontWeight="500" color="gray.500">
            Reino Unido
          </Text>
        </Flex>
        <Image 
          src="/images/flag_reino_unido.png" 
          alt="Bandeira do reino unido" 
          w="30px" h="30px" borderRadius="50%" objectFit="cover"
        />
      </Flex>
    </Box>
  )
}

export { City };