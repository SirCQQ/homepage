import React from 'react';
import Page from 'components/core/page';
import Header from 'components/core/header';
import Spacer from 'components/core/spacer';
import {
  CompanyExperience,
  ExperienceCompanyName,
  ExperienceHeader,
  ExperienceCompanyStay,
  ExperienceBody,
  ProjectProps,
  Project
} from 'components/core/experience';

const projects: Record<string, ProjectProps> = {
  osram: {
    projectDescription: [
      "Developers needed a easier way to edit a large excel file that would contain tens of thousands of variables for each different projects, with this problem in mind that 'Parameter Manager' was started.",
      'The solution proposed was that we need an app where you could upload an excel file with a predifined structure, the app would parse the excel and would allow the developers to group specific parameters into sub-modules and many other things.',
      'The application was developed using React, Electron, Flask for backend with MySql for the database.'
    ],
    projectName: 'Parameter Manager',
    technologies: [
      'React',
      'Flask',
      'NodeJs',
      'MySQL',
      'Javascript',
      'HTML',
      'CSS',
      'Bootstrap'
    ]
  },
  skywind1: {
    projectName: 'Pariuri1X2',
    projectDescription: [
      "Pariuri1X2 it's a local sports site where people can write articles/opinions or upload videos about different games (usually football/soccer) and bet on the winning teams.",
      'The main features I was working on were: React, Typescript, ExpressJs, Nodejs, MongoDB, MariaDb, Javascript'
    ],

    technologies: [
      'React',
      'Express',
      'MySQL',
      'MongoDB',
      'Redis',
      'SCSS',
      'Typescript',
      'Redux'
    ]
  },
  skywind2: {
    projectDescription: [
      'Optimrent is a local app that helps renters and owners communicate and pay the bills. Its main focus is to help owners or administrators easily manage their properties with all the bills, repairs and anything that needs to be done to a property.',
      'I contribute to this project by helping maintaing the old code base, fixing bugs, adding new small features.',
      'My main contribution was the implementing the subscription module on frontend.'
    ],
    projectName: 'Optimrent',
    technologies: [
      'React',
      'SCSS',
      'Javascript',
      'Styled-Component',
      'Redux',
      'Typescript'
    ]
  },
  bytex: {
    projectName: 'Powercode',
    projectDescription: [
      'The application aims to help ( TV, Internet and Telephone) providers to organise their clients and services better.',
      `The main features I was working on were: Generating invoices, User Defined Fields, User Notification, User Permissions`
    ],
    technologies: [
      'JavaScript',
      'CSS',
      'MySQL',
      'SQL',
      'Node.js',
      'Redux',
      'Typescript',
      'GraphQL',
      'Git',
      'SASS',
      'HTML',
      'Next.js',
      'React'
    ]
  },
  seed2shelf: {
    projectName: 'Seed2Shelf',
    projectDescription: [
      "Seed2Shelf it's a SaaS that aims to help production labs to organise better and to create organised workflows and get better results, helping to keep track of the inventory, transports and seamless integration with Metrc.",
      'The main Features I was working on were: Integration with Metrc, Users system, Licenses system, Billing system '
    ],
    technologies: [
      'JavaScript',
      'CSS',
      'MySQL',
      'SQL',
      'Node.js',
      'Redux',
      'Typescript',
      'Git',
      'SASS',
      'HTML',
      'Next.js',
      'React',
      'NestJs',
      'REST API'
    ]
  },
  gemini: {
    projectName: 'Gemini',
    projectDescription: [
      'The main technologies are Remix, Typescript, Lambda, Graphql, MySQL, AWS, NextJs and Pulumi.',
      "      The project is the re-writing of an old application from the company, the application it's like a blog for the HR industry where different people from different companies are posting articles or services that their companies are providing and many other things, the application it's a big hit in Germany, having a 90& margin of the market."
    ],
    technologies: [
      'JavaScript',
      'CSS',
      'MySQL',
      'SQL',
      'Node.js',
      'Typescript',
      'Git',
      'SASS',
      'HTML',
      'Next.js',
      'React',
      'Remix',
      'AWS'
    ]
  }
};

export const Experience = () => {
  return (
    <Page
      flexDirection="column"
      alignItems="start"
      padding="0 15px"
      fontSize={'unset'}
    >
      <Spacer />
      <Header flex="1" h="60px">
        Work experience
      </Header>
      <CompanyExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Osram Continetal</ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2019, 1)}
            endDate={new Date(2021, 3)}
          />
        </ExperienceHeader>
        <ExperienceBody>
          <Project {...projects['osram']} />
        </ExperienceBody>
      </CompanyExperience>

      <CompanyExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Skywind </ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2020, 10)}
            endDate={new Date(2021, 4)}
          />
        </ExperienceHeader>
        <ExperienceBody>
          <Project {...projects['skywind1']} />
          <Project {...projects['skywind2']} />
        </ExperienceBody>
      </CompanyExperience>
      <CompanyExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Bytex</ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2019, 1)}
            endDate={new Date(2020, 3)}
          />
        </ExperienceHeader>
        <ExperienceBody>
          <Project {...projects['bytex']} />
        </ExperienceBody>
      </CompanyExperience>
      <CompanyExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Seed2Shelf</ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2021, 5)}
            endDate={new Date(2022, 2)}
          />
        </ExperienceHeader>
        <ExperienceBody>
          <Project {...projects['seed2shelf']} />
        </ExperienceBody>
      </CompanyExperience>
      <CompanyExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Haufe</ExperienceCompanyName>
          <ExperienceCompanyStay startDate={new Date(2022, 10)} current />
        </ExperienceHeader>
        <ExperienceBody>
          <Project {...projects['gemini']} />
        </ExperienceBody>
      </CompanyExperience>
    </Page>
  );
};
