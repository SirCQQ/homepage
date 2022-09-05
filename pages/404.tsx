import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Page from 'components/page';

const Page404 = () => {
  return (
    <Page>
      <Box>
        <Container>
          <Text>
            Opss... Couldn&apos;t find the page that your are looking for.
          </Text>
        </Container>
        <Flex justifyContent="center" p="2.5">
          <Button>
            <Link href="/">Home page</Link>
          </Button>
        </Flex>
      </Box>
    </Page>
  );
};

export default Page404;
