import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    mt="10"
    px="6"
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={`all`}
    transitionDuration="0.8s"
    transitionDelay={`${delay}s`}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
