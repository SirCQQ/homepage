import Link from 'next/link';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 60px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  img {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  // const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Flex
          borderRadius={9999}
          border={useColorModeValue('3px solid black', ' 3px solid white')}
          borderWidth="3px"
          padding="1"
          h="10"
          w="10"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
          transition="0.1s ease-in"
          _hover={{
            transform: 'rotate(20deg)'
          }}
        >
          <Image alt="avatar" src="/images/avatar2.png" fill />
        </Flex>
        <Text
          color={useColorModeValue('gray.900', 'whiteAlpha.900')}
          fontFamily="monospace, sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Gatu Cristian
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
