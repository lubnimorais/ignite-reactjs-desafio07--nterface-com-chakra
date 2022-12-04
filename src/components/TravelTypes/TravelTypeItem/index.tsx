import { Flex, useBreakpointValue, Image, Text } from '@chakra-ui/react';

interface ITravelTypeItemProps {
  icon: string;
  title: string;
}

const TravelTypeItem = ({icon, title}: ITravelTypeItemProps) => {
  const isShowIcon = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex
      flexDirection={['row', 'column']}
      alignItems='center'
      justifyContent='center'
      paddingX="6"
    >

      { isShowIcon ? (<Image 
        src={`/images/${icon}.svg`} 
        alt="travel type"
        width="85px"
        height="85px"
        marginBottom="6"
      />) : (
        <Text fontSize="4xl" color="yellow.400" marginRight="2">
          •
        </Text>
      )}

      <Text fontWeight="600" fontSize={['md', 'xl', '2xl']} color="gray.700">{title}</Text>

    </Flex>
  )
}

export { TravelTypeItem }