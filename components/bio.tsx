import { Box } from '@chakra-ui/react';

export const BioSection = ({ children }) => (
  <Box
    display={'flex'}
    w="100vw"
    maxW={'100%'}
    marginBottom={{ base: 10, md: '5' }}
    flexDirection={{ base: 'column', sm: 'row' }}
    wordBreak="keep-all"
  >
    {children}
  </Box>
);

export const BioYear = ({ children }) => (
  <Box as="span" fontWeight={'bold'} marginRight="5">
    {children}
  </Box>
);

// export const BioYear = styled.span`
//   font-weight: bold;
//   margin-right: 0.5em;
// `;
