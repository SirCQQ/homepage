import { Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      opacity={0.4}
      color={useColorModeValue("black", "white")}
      fontSize='sm'
    >
      &copy; {new Date().getFullYear()} Gatu Cristian. All Rights Reserved.
    </Flex>
  );
};

export default Footer;
