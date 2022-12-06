import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
  return (
    <Flex
      width="100%"
      maxWidth="1240px"
      height={['250px', '450px']}
      marginX="auto"
      marginBottom={['5', '10']}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{
          width: '100%',
          flex: 1,
        }}
      >

<SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage='url(/images/continent_europe.png)'
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <Heading
                fontSize={['3xl', '4xl', '5xl']}
                fontWeight="bold"
                color="gray.100"
              >
                Europa
              </Heading>
              <Text
                fontWeight="bold"
                fontSize={['0.8rem', '1xl', '2xl']}
                color="white"
                marginTop={['2', '4']}
              >
                O continente mais antigo
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            backgroundImage='url(/images/continent_europe.png)'
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <Heading
                fontSize={['3xl', '4xl', '5xl']}
                fontWeight="bold"
                color="gray.100"
              >
                Europa
              </Heading>
              <Text
                fontWeight="bold"
                fontSize={['0.8rem', '1xl', '2xl']}
                color="white"
                marginTop={['2', '4']}
              >
                O continente mais antigo
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        

      </Swiper>


    </Flex>
  )
}

export { Slider }