import { Flex, Heading } from "@chakra-ui/react";

const BannerContinent = () => {
  return (
    <Flex
      width="100%"
      height={['150px', '300px', '500px']}
      paddingX={['0', '0', '36']}
      paddingTop={['0', '0', '72']}
      backgroundImage="url(/images/bannereuropa.png)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems="center"
      justifyContent={['center', 'center', 'flex-start']}
    >

      <Heading
        fontSize={['1.75rem', '5xl']}
        fontWeight="500"
        textAlign={['center', 'left']}
        color="gray.100"
      >
        Europa
      </Heading>
    </Flex>
  );
}

export { BannerContinent }