import { Flex, useColorModeValue, Heading, Box, Text } from "@chakra-ui/react";

import { BioSection, BioYear } from "./bio";
import Page from "./page";
import ProfileImage from "./profile-image";
import Section from "./section";

const About: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Page
      {...props}
      w='100vw'
      maxWidth={"100%"}
      minW={"100%"}
      h='fit-content'
      minH='100vh'
      paddingY='15'
    >
      <Flex
        w='container.xl'
        maxWidth={"100%"}
        h='full'
        minH='100vh'
        flexDir='column'
      >
        <Box
          className='test'
          // mt='14'
          w='full'
          maxW='100%'
          flexShrink={0}
          mt={{ base: 12, md: 36 }}
          // paddingX='16'
          // mx={{ base: 6, md: 6 }}
          textAlign='center'
        >
          <Box
            borderColor={useColorModeValue("blackAlpha.900", "whiteAlpha.900")}
            borderWidth={2}
            borderStyle='solid'
            w='200px'
            h='200px'
            display='inline-block'
            borderRadius='full'
            overflow='hidden'
          >
            <ProfileImage
              src='/images/cristian.jpg'
              alt='Profile image'
              borderRadius='full'
              layout='fill'
              width='200%'
              height='200%'
            />
          </Box>
        </Box>
        <Box>
          <Section delay={0.4}>
            <Heading variant='section-title'>About</Heading>
            <Text>
              I am a fullstack developer based in Europe with a big passion for
              building new things that would have a big impact and coffee ☕.
              Excited to take part in the process from the planing till the
              finish product. If I am not at the laptop usualy I am out with my
              fiance having a great time and occasionally taking photos or
              learing about the stocks.
            </Text>
          </Section>
          <Section delay={0.4}>
            <Heading variant='section-title'>Bio</Heading>
            <BioSection>
              <BioYear>1998</BioYear>
              <Text>Bord in Iasi, Romania</Text>
            </BioSection>
            <BioSection>
              <BioYear>2017-2020</BioYear>
              <Text>
                Bachelor Degree in Computer Science at University of
                &quot;Alexandru&nbsp;Ioan&nbsp;Cuza&quot; Iasi
              </Text>{" "}
            </BioSection>
            <BioSection>
              <BioYear>2019 - Present</BioYear>
              <Text>
                {" "}
                Working as a fullstack developer and improving my skills
              </Text>
            </BioSection>
          </Section>
        </Box>
      </Flex>
    </Page>
  );
};

export default About;
