import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react"

import { RiInformationLine } from 'react-icons/ri';

const InformationDetail = () => {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          fontWeight="500"
          color="yellow.400"
        >
          50
        </Heading>

        <Text
          fontSize={['md', 'xl']}
          fontWeight="500"
          color="gray.700"
        >
          países
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          fontWeight="500"
          color="yellow.400"
        >
          60
        </Heading>

        <Text
          fontSize={['md', 'xl']}
          fontWeight="500"
          color="gray.700"
        >
          línguas
        </Text>
      </Flex>


      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems={['flex-start', 'flex-start', 'center']}
      >
        <Heading
          fontSize={['2xl', '5xl']}
          fontWeight="500"
          color="yellow.400"
        >
          27
        </Heading>

        <Text
          fontSize={['md', 'xl']}
          fontWeight="500"
          color="gray.700"
        >
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  width={['10px', '16px']}
                  height={['10px', '16px']}
                  cursor='pointer'
                  as={RiInformationLine}
                  marginLeft='1'
                  color='gray.400'
                />
              </span>
            </PopoverTrigger>
            <PopoverContent backgroundColor="gray.700" color="white">
              <PopoverArrow backgroundColor="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontSize='lg' fontWeight="400">
                Chile, Canadá
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}

export { InformationDetail }