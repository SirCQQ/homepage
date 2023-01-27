import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'layouts/main';
import { AnimatePresence } from 'framer-motion';
import ScrollObserver from 'components/core/scroll-observer';
import Chakra from 'components/chakra';
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ScrollObserver>
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ScrollObserver>
    </Chakra>
  );
}

export default MyApp;
