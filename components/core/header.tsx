import {
  Flex,
  FlexProps,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

const Header = forwardRef<FlexProps, 'div'>(({ children, ...props }, ref) => {
  return (
    <Flex
      ref={ref}
      bg={useColorModeValue('white', 'black')}
      color={useColorModeValue('black', 'white')}
      fontSize="4xl"
      //   justifyContent='center'
      // alignItems="center"
      // width='full'
      // padding={{ md: '15px', base: '10px' }}
      fontWeight="bold"
      {...props}
    >
      {children}
    </Flex>
  );
});
export default Header;
