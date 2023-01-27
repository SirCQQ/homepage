import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import NavBar from 'components/navbar';
import Footer from 'components/footer';

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cristian's homepage" />
        <meta name="author" content="Cristian Gatu" />
        <meta name="author" content="SirCQQ" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Cristian Gatu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SirCQQ" />
        <meta name="twitter:creator" content="@SirCQQ" />
        {/* <meta name="twitter:image" content="" /> */}
        <meta property="og:site_name" content="Cristian Gatu" />
        <meta name="og:title" content="Cristian Gatu" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/api/og/homepage" />
        <title>Gatu Cristian - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container w="100vw" maxW={'100%'} p="0" m="0">
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
