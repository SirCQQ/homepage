import type { NextPage } from 'next';
import About from 'components/sectios/about';
import Contact from 'components/sectios/contact';
import Home from 'components/sectios/home';
import DisplayWork from 'components/sectios/work';
import Head from 'next/head';

const index: NextPage = () => {
  // const refContainer = useRef<HTMLDivElement>(null);
  const imageUrl = '/api/op?title="SirCQQ Website"';
  return (
    <>
      <Head>
        <title>Gatu Cristian Website</title>
        <meta property="og:image" content={imageUrl} />
      </Head>
      <Home id="home" />
      <About id="about" />
      <DisplayWork id="work" />
      {/* <Skills id="skills" /> */}
      {/* <Posts id="posts" /> */}
      <Contact id="contact" />
    </>
  );
};

export default index;
