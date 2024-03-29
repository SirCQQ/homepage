import { Box, BoxProps, forwardRef, Text } from '@chakra-ui/react';
import React from 'react';
import {
  TileWrapper,
  TileBackground,
  TileContent,
  Tile
} from 'components/core/tiles';
import {
  WorkBackground,
  WorkContainer,
  WorkImage,
  WorkLeft,
  WorkLink,
  WorkRight,
  WorkTitle
} from 'components/core/work-panel';

const DisplayWork = forwardRef<BoxProps, 'div'>(
  ({ children, ...props }, ref) => {
    return (
      <Box {...props} ref={ref}>
        <TileWrapper numOfPages={3}>
          <TileBackground>
            <WorkBackground />
          </TileBackground>
          <TileContent>
            <Tile
              page={0}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <Text color="white">I&apos;ve build</Text>
                    <WorkTitle>
                      <WorkLink href="https://catenaelectric.ro/">
                        Catena&apos;s
                      </WorkLink>{' '}
                      Contracts app
                    </WorkTitle>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <WorkImage alt="catena-logo" src="/images/catena.jpg" />
                  </WorkRight>
                </WorkContainer>
              )}
            />
            <Tile
              page={1}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <Text color="white">I&apos;ve worked on</Text>
                    <WorkTitle>
                      <WorkLink href="http://seed2shelf.us/">
                        Seed2Shelf&apos;s
                      </WorkLink>{' '}
                      application
                    </WorkTitle>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <WorkImage alt="s2s-logo" src="/images/s2s-logo.png" />
                  </WorkRight>
                </WorkContainer>
              )}
            />
            <Tile
              page={2}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <Text color="white">I&apos;ve helped</Text>
                    <WorkTitle>
                      <WorkLink href="https://powercode.com">
                        Powercode&apos;s
                      </WorkLink>{' '}
                      platform
                    </WorkTitle>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <WorkImage
                      alt="powercode-logo"
                      src="/images/Powercode_Logo2.png"
                    />
                  </WorkRight>
                </WorkContainer>
              )}
            />
          </TileContent>
        </TileWrapper>
      </Box>
    );
  }
);

export default DisplayWork;
