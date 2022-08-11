import type { NextPage } from "next";
import About from "components/about";
import Contact from "components/contact";
import Home from "components/home";
import Skills from "components/skills";
import Work from "components/work";

const index: NextPage = () => {
  // const refContainer = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Home id='home' />
      <About id='about' />
      <Work id='work' />
      <Skills id='skills' />
      <Contact id='contact' />
    </div>
  );
};

export default index;
