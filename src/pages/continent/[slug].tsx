import { Flex } from "@chakra-ui/react";

import { BannerContinent } from "../../components/BannerContinent";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";

export default function Continent() {
  return (
    <Flex flexDirection="column">
      <BannerContinent />

      <Flex 
        flexDirection="column"
        maxWidth="1160px"
        marginX="auto"
        marginBottom="10"
        paddingX="1rem"
      >
        <Content />

        <Cities />
      </Flex>
    </Flex>
  )
}
