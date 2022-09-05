import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { FunctionComponent, useContext, useRef } from 'react';
import { ScrollContext } from './scroll-observer';
interface WrapperProps {
  numOfPages: number;
  children?: React.ReactNode | React.ReactNode[];
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}
export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0
});

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numOfPages
}) => {
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef<HTMLDivElement>(null);

  const { current: elContainer } = refContainer;
  let currentPage = 0;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = percentY * numOfPages;
  }
  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <Box
        className="tile-wrapper"
        ref={refContainer}
        position="relative"
        bg={useColorModeValue('black', 'white')}
        color={useColorModeValue('white', 'black')}
        style={{ height: `${numOfPages * 100}vh` }}
      >
        {children}
      </Box>
    </TileContext.Provider>
  );
};

export const TileBackground: FunctionComponent<{
  children?: React.ReactNode | React.ReactNode[];
}> = ({ children }) => (
  <Box position="absolute" h="full" w="full" className="absolute h-full w-full">
    {children}
  </Box>
);

export const TileContent: FunctionComponent<{
  children?: React.ReactNode | React.ReactNode[];
}> = ({ children }) => (
  <Box
    position="sticky"
    top="0"
    h="100vh"
    overflow={'hidden'}
    className="sticky top-0 h-screen overflow-hidden"
  >
    {children}
  </Box>
);

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

export const Tile: FunctionComponent<Props> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);

  const progress = Math.max(0, currentPage - page);
  const refContainer = useRef<HTMLDivElement>(null);
  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }
  return (
    <Box
      position="absolute"
      top="0px"
      w="full"
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity
      }}
      ref={refContainer}
    >
      {renderContent({ progress })}
    </Box>
  );
};
