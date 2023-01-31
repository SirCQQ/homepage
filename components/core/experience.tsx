import React, { useId } from 'react';
import { Box, Flex, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { months } from 'common';
import { Spacer as Br } from '@chakra-ui/react';

export const CompanyExperience = ({ children }) => {
  return (
    <Box h="full" padding={{ base: '20px 10px', md: '20px 20px' }} width="full">
      {children}
    </Box>
  );
};

export const ExperienceHeader = ({ children }) => {
  return <Box> {children}</Box>;
};

export const ExperienceCompanyName = ({ children }) => {
  return (
    <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold">
      {children}
    </Text>
  );
};
export const ExperienceBody = ({ children }) => {
  return <Box>{children}</Box>;
};

const ExperienceProject = ({ children }) => {
  return <Box m="10px 0px ">{children}</Box>;
};

const ProjectName = ({ children }) => {
  return (
    <Text fontSize={{ base: 'larger', md: 'larger' }} fontWeight={'bold'}>
      {children}
    </Text>
  );
};

const ProjectDescription = ({ children }) => {
  return <Box fontSize={{ base: 'medium', md: 'lg' }}>{children}</Box>;
};

type ProjectStackProps = {
  technologies: string[];
};
const ProjectStack: React.FunctionComponent<ProjectStackProps> = ({
  technologies
}) => {
  return (
    <Box>
      <Text fontSize={'large'} fontWeight="bold">
        Technologies
      </Text>
      <Flex wrap={'wrap'}>
        {technologies.map((t, i) => (
          <Technologi key={`${t}-i`}>{t}</Technologi>
        ))}
      </Flex>
    </Box>
  );
};

const Technologi = ({ children }) => {
  return (
    <Text
      border="2px solid"
      height={'fit-content'}
      padding="2px 10px"
      borderColor={useColorModeValue('red.500', 'red.900')}
      borderRadius="20px"
      margin="5px 5px 5px 0px "
      w="fit-content"
    >
      {children}
    </Text>
  );
};

type ExperienceCompanyStayProps = {
  startDate: Date;
  endDate?: Date;
  current?: boolean;
};

export const ExperienceCompanyStay: React.FunctionComponent<
  ExperienceCompanyStayProps
> = ({ startDate, endDate, current }) => {
  return (
    <Box display="flex">
      <Text fontSize="md" fontWeight="normal">
        {dateToString(startDate)}-{!current ? dateToString(endDate) : 'Present'}
      </Text>
    </Box>
  );
};

const dateToString = date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return [months[month], year].join('/');
};

export type ProjectProps = {
  projectName: string;
  projectDescription: string[];
  technologies: ProjectStackProps['technologies'];
};
export const Project: React.FunctionComponent<ProjectProps> = React.memo(
  ({ projectDescription, projectName, technologies }) => {
    return (
      <ExperienceProject>
        <ProjectName>{projectName}</ProjectName>
        <ProjectDescription>
          {projectDescription.map((d, i) => (
            <React.Fragment key={`${i}-${d.split(' ')[0]}`}>
              <Text>{d}</Text>
              <Br margin={'10px 0px'} />
            </React.Fragment>
          ))}
        </ProjectDescription>

        <ProjectStack technologies={technologies} />
      </ExperienceProject>
    );
  }
);
