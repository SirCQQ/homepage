import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import React from 'react';

const Spacer = forwardRef<BoxProps, 'div'>(({ children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      bg="transparent"
      color="transparent"
      fontSize="4xl"
      pointerEvents="none"
      display="block"
      width="full"
      height="76px"
      {...props}
    />
  );
});
export default Spacer;
