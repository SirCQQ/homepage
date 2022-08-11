import React from "react";
import Page from "components/page";
import Section from "./section";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import Skill from "./skill";

const Skills: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <Page
      {...props}
      w='100vw'
      maxW={"100%"}
      minW='100%'
      h='fit-content'
      minH={"100vh"}
      m='0'
    >
      <Box w={"full"}>
        <Section delay={0.8}>
          <Heading variant='section-title'>Skills</Heading>
          <Grid
            templateColumns={" repeat( auto-fit, minmax(125px, 1fr) )"}
            rowGap='5'
            columnGap='5'
          >
            <Skill level={4}>Javascript</Skill>
            <Skill level={3}>React</Skill>
            <Skill level={3}>Node</Skill>
            <Skill level={3}>Typescript</Skill>
            <Skill level={3}>NextJs</Skill>
            <Skill level={3}>NestJs</Skill>
            <Skill level={3}>Express</Skill>
            <Skill level={3}>MongoDB</Skill>
            <Skill level={2}>TypeORM</Skill>
            <Skill level={2}>MySQL</Skill>
            <Skill level={2}>Git</Skill>
            <Skill>test</Skill>
          </Grid>
        </Section>
      </Box>
    </Page>
  );
};

export default Skills;
