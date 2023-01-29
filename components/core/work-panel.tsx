import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export const WorkContainer: React.FunctionComponent<{
  children?: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(2, minmax(0, 1fr))'
      }}
      w="full"
      minH="100vh"
    >
      {children}
    </Grid>
  );
};

export const WorkBackground: React.FunctionComponent<{
  children?: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(2, minmax(0, 1fr))'
      }}
      position="sticky"
      top="0"
      w="full"
      minH="100vh"
    >
      <Box bg="black" h={{ base: '40vh', md: 'auto' }} />
      <Box
        bg="white"
        h={{ base: '60vh', md: '100vh' }}
        minH={{ md: '100vh' }}
      />
    </Grid>
  );
};

export const WorkLeft: React.FunctionComponent<{
  children?: React.ReactNode | React.ReactNode[];
  progress: number;
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) {
    translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h={{ base: '40vh', md: 'auto' }}
      fontSize={{ base: '3xl', md: '3xl' }}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <Box className="leading-10" padding={{ base: '0', md: '15' }}>
        {children}
      </Box>
    </Flex>
  );
};

export const WorkRight: React.FunctionComponent<{
  children?: React.ReactNode | React.ReactNode[];
  progress: number;
}> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress * 0.5) * 50);
  // if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <Flex
      flex="1"
      alignItems={{ md: 'center' }}
      justifyContent="center"
      h={{ base: '40vh', md: 'auto' }}
      align={{ xl: 'center' }}
      // className='flex flex-1 lg:items-center justify-center h-screen'
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <Box
        w="full"
        minW="md"
        pt={{ base: 10, md: 0 }}
        px={{ base: 10, md: 0 }}
        paddingX={10}
        className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"
      >
        {children}
      </Box>
    </Flex>
  );
};

export const WorkLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      target="_blank"
      style={{ textDecoration: 'underline', textUnderlineOffset: '10px' }}
    >
      {/* <a
        target="_blank"
      > */}
      {children}
      {/* </a> */}
    </Link>
  );
};

export const WorkTitle = ({ children }) => {
  return (
    <Text
      color="white"
      fontSize={{ base: '4xl', md: '5xl' }}
      fontWeight="semibold"
      letterSpacing="tight"
    >
      {children}
    </Text>
  );
};

export const WorkImage = ({ src, alt }) => {
  return (
    <Box w="full" p="10">
      <Image
        // layout="responsive"
        alt={alt}
        src={src}
        width={1080}
        height={840}
      />
    </Box>
  );
};
