import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { months } from 'common';

export const ProjectExperience = ({ children }) => {
  return (
    <Box
      minH="calc( 100vh - 76px -60px )"
      h="full"
      minHeight="80vh"
      padding="0px 20px"
      //   bgColor='white'
      width="full"
    >
      {children}
    </Box>
  );
};

export const ExperienceHeader = ({ children }) => {
  return <Box> {children}</Box>;
};

export const ExperienceCompanyName = ({ children }) => {
  return (
    <Text fontSize="2xl" fontWeight="semibold">
      {children}
    </Text>
  );
};

type ExperienceCompanyStayProps = {
  startDate: Date;
  endDate: Date;
};

export const ExperienceCompanyStay: React.FunctionComponent<
  ExperienceCompanyStayProps
> = ({ startDate, endDate }) => {
  return (
    <Box display="flex">
      <Text fontSize="md" fontWeight="normal">
        {dateToString(startDate)}-{dateToString(endDate)}
      </Text>
      &nbsp;
      {/* <Text fontSize='md'>({calculateStay(startDate, endDate)})</Text> */}
    </Box>
  );
};

const dateToString = date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return [months[month], year].join('/');
};

const calculateStay = (startDate: Date, endDate: Date) => {
  const yearsStayed = endDate.getFullYear() - startDate.getFullYear();
  const monthsStayed = endDate.getMonth() - startDate.getMonth();
  let years = '';
  let months = '';
  if (yearsStayed > 0) {
    if (yearsStayed === 1) {
      years = `${yearsStayed} year`;
    } else {
      years = `${yearsStayed} years`;
    }
  }
  if (monthsStayed > 0) {
    if (monthsStayed === 1) {
      months = `${monthsStayed} month`;
    } else {
      months = `${monthsStayed} months`;
    }
  }
  return `${years ?? ''} ${years && months ? 'and' : ''} ${months ?? ''}`;
};
