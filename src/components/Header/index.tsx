import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaChevronLeft } from 'react-icons/fa'

const Header = () => {
  const { asPath } = useRouter();

  const isHomePage = asPath === '/';

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

        {!isHomePage && (
          <Link href='/'>
            <Icon
              as={FaChevronLeft}
              fontSize={[20]}
              justifyContent="start"
            />
          </Link>
        )}

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