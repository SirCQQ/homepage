import React from 'react';
import Page from 'components/page';
import Typed from 'react-typed';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const Home: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Page {...props}>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        h="full"
        w="full"
        m="0"
        minH="100vh"
        className="flex justify-around items-center h-full w-full m-0 min-h-[100vh]"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Flex
          bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
          h={{ base: '50%', md: 'full' }}
          w={{ base: 'full', md: 'full' }}
          flex="1"
          color={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
          minH={{ base: '50%', md: '100vh' }}
          justifyContent={'center'}
          alignItems="center"
          flexDir={'column'}
          textAlign="center"
          // className='bg-white text-black h-full w-full flex-1 flex items-center justify-center flex-col'
        >
          <Text>Hello there.</Text>
          <Text>I&apos;m Gatu Cristian.</Text>
        </Flex>

        <Flex
          h={{ base: '50%', md: 'full' }}
          w={{ base: 'full', md: 'full' }}
          minH={{ base: '50%', md: '100vh' }}
          flex="1"
          justifyContent={'center'}
          alignItems="center"
          flexDir={'column'}
          bg={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
          color={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
          className="bg-black text-white min-h-[100vh] w-full flex-1 flex items-center justify-center flex-col text-right"
        >
          <Text>I am a</Text>
          <Text>
            <strong>
              <Typed
                strings={['Frontend', 'Backend', 'Fullstack']}
                typeSpeed={75}
                backSpeed={100}
                loop
              />
            </strong>
          </Text>
          <Text>Developer.</Text>
        </Flex>
      </Flex>
    </Page>
  );
};

export default Home;
