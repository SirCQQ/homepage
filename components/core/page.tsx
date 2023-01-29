import {
  Flex,
  FlexProps,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

const Page = forwardRef<FlexProps, 'div'>(({ children, ...props }, ref) => {
  return (
    <Flex
      ref={ref}
      bg={useColorModeValue('white', 'black')}
      color={useColorModeValue('black', 'white')}
      fontSize="3xl"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      minW="100%"
      h="full"
      w="full"
      {...props}
    >
      {children}
    </Flex>
  );
});
export default Page;
