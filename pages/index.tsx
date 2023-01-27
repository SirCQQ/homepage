import type { NextPage } from 'next';
import About from 'components/about';
import Contact from 'components/contact';
import Home from 'components/home';
import Skills from 'components/skills';
import Work from 'components/work';
import Posts from 'components/posts';
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
      <Work id="work" />
      <Skills id="skills" />
      <Posts id="posts" />
      <Contact id="contact" />
    </>
  );
};

export default index;
