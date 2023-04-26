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
  ExperienceProject,
  ProjectName,
  ProjectDescription,
  ProjectStack
} from 'components/core/experience';
import { Text, Spacer as Br, UnorderedList, ListItem } from '@chakra-ui/react';

export const Experience = () => {
  return (
    <Page
      flexDirection="column"
      alignItems="start"
      padding={{ base: '0 15px', md: '0px 15%', lg: '0px 25%' }}
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
          <ExperienceProject>
            <ProjectName>&apos;Parameter Manager&apos;</ProjectName>
            <ProjectDescription>
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Project description
              </Text>

              <Text>
                Developers needed a easier way to edit a large excel file that
                would contain tens of thousands of variables for each different
                projects, with this problem in mind that &apos;Parameter
                Manager&apos; was started.
              </Text>
              <Br margin={'10px 0px'} />
              <Text>
                The solution proposed was that we need an app where you could
                upload an excel file with a predifined structure, the app would
                parse the excel and would allow the developers to group specific
                parameters into sub-modules and many other things.
              </Text>
              <Br margin={'10px 0px'} />
              <Text>
                The application was developed using React, Electron, Flask for
                backend with MySql for the database.
              </Text>
              <Br margin={'20px 0px'} />
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Responsabilities
              </Text>
              <UnorderedList>
                <ListItem>
                  Understanding requirements and implementing features based on
                  the them
                </ListItem>
                <ListItem>Write clean and maintainable code</ListItem>
                <ListItem>Optimization for large data</ListItem>
                <ListItem>Mentoring the new intern</ListItem>
                <ListItem>Code Review</ListItem>
              </UnorderedList>
            </ProjectDescription>

            <ProjectStack
              technologies={[
                'React',
                'Flask',
                'NodeJs',
                'MySQL',
                'Javascript',
                'HTML',
                'CSS',
                'Bootstrap'
              ]}
            />
          </ExperienceProject>
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
          <ExperienceProject>
            <ProjectName>&apos;Pariuri1X2&apos;</ProjectName>
            <ProjectDescription>
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Project description
              </Text>

              <Text>
                Pariuri1X2 it&apos;s a local sports site where people can write
                articles/opinions or upload videos about different games
                (usually football/soccer) and bet on the winning teams.
              </Text>
              <Br margin={'10px 0px'} />
              <Text>
                This site was created as with the purpose sharing knowledge and
                oppinios about diffent teams and sports with other people.
              </Text>
              <Br margin={'20px 0px'} />
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Responsabilities
              </Text>
              <UnorderedList>
                <ListItem>
                  Maintaining the old code base and fixing bug
                </ListItem>
                <ListItem>Write clean and maintainable code</ListItem>
                <ListItem>
                  Adding new functionality to the old features
                </ListItem>
                <ListItem>
                  Creating a new calendar in the main page, connecting different
                  games with different articles that tagged the specific game or
                  team
                </ListItem>
              </UnorderedList>
            </ProjectDescription>

            <ProjectStack
              technologies={[
                'React',
                'Express',
                'MySQL',
                'MongoDB',
                'Redis',
                'SCSS',
                'Typescript',
                'Redux'
              ]}
            />
          </ExperienceProject>
          <ExperienceProject>
            <ProjectName>&apos;Optimrent&apos;</ProjectName>
            <ProjectDescription>
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Project description
              </Text>

              <Text>
                Optimrent is a local app that helps renters and owners
                communicate and pay the bills. Its main focus is to help owners
                or administrators easily manage their properties with all the
                bills, repairs and anything that needs to be done to a property.
              </Text>
              <Br margin={'10px 0px'} />
              <Text>
                The application aims to help the owners, administrators but
                tenants as well by providing all the informations in a single
                app with access to the history off all the repairs, bills, etc.
              </Text>
              <Br margin={'20px 0px'} />
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Responsabilities
              </Text>
              <UnorderedList>
                <ListItem>
                  Maintaining or rewriting the old code base and fixing bug
                </ListItem>
                <ListItem>Write clean and maintainable code</ListItem>
                <ListItem>Implementing pixel perfect designs</ListItem>
                <ListItem>
                  Connecting the frontend with the backend module for
                  subscription and the rest of the business logic for
                  subscriptions.
                </ListItem>
              </UnorderedList>
            </ProjectDescription>

            <ProjectStack
              technologies={[
                'React',
                'SCSS',
                'Javascript',
                'Styled-Component',
                'Redux',
                'Typescript'
              ]}
            />
          </ExperienceProject>
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
          <ExperienceProject>
            <ProjectName>&apos;Powercode&apos;</ProjectName>
            <ProjectDescription>
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Project description
              </Text>

              <Text>
                The application aims to help ( TV, Internet and Telephone)
                providers to organise their clients and services better.
              </Text>
              <Br margin={'20px 0px'} />
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Responsabilities
              </Text>
              <UnorderedList>
                <ListItem>
                  Maintaining the old code base and fixing bug
                </ListItem>
                <ListItem>Write clean and maintainable code</ListItem>
                <ListItem>Implementing pixel perfect designs</ListItem>
                <ListItem>Code Review</ListItem>
                <ListItem>
                  Worked on generating invoices and sending the PDF via the user
                  email
                </ListItem>
                <ListItem>User Defined Fields</ListItem>
                <ListItem>User Notification</ListItem>
                <ListItem>User Permissions</ListItem>
              </UnorderedList>
            </ProjectDescription>

            <ProjectStack
              technologies={[
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
              ]}
            />
          </ExperienceProject>
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
          <ExperienceProject>
            <ProjectName>&apos;Seed2Shelf Application&apos;</ProjectName>
            <ProjectDescription>
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Project description
              </Text>

              <Text>
                Seed2Shelf it&apos;s a SaaS that aims to help production labs to
                organise better and to create organised workflows and get better
                results, helping to keep track of the inventory, transports and
                seamless integration with Metrc.
              </Text>
              <Br margin={'20px 0px'} />
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Responsabilities
              </Text>
              <UnorderedList>
                <ListItem>
                  Creating the arhitecture of the application Frontend and
                  Backend
                </ListItem>
                <ListItem>Write clean and maintainable code</ListItem>
                <ListItem>Implementing pixel perfect designs</ListItem>
                <ListItem>Leading a team of 4 developers</ListItem>
                <ListItem>
                  Helping other 2 juniors on different projects
                </ListItem>
                <ListItem>
                  Creating tehnical requirements from client requirements
                </ListItem>
                <ListItem>Code Review</ListItem>
                <ListItem>
                  Creating an organized workflow for the team, asigning task and
                  checking their progress
                </ListItem>
              </UnorderedList>
            </ProjectDescription>

            <ProjectStack
              technologies={[
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
              ]}
            />
          </ExperienceProject>
        </ExperienceBody>
      </CompanyExperience>

      <CompanyExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Haufe</ExperienceCompanyName>
          <ExperienceCompanyStay startDate={new Date(2022, 10)} current />
        </ExperienceHeader>
        <ExperienceBody>
          <ExperienceProject>
            <ProjectName>&apos;Gemini&apos;</ProjectName>
            <ProjectDescription>
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Project description
              </Text>

              <Text>
                The project is the re-writing of an old application from the
                company, the application it&apos;s like a blog for the HR
                industry where different people from different companies are
                posting articles or services that their companies are providing
                and many other things, the application it&apos;s a big hit in
                Germany, having a 90& margin of the market.
              </Text>

              <Br margin={'20px 0px'} />
              <Text fontSize={'large'} fontStyle={'oblique'}>
                Responsabilities
              </Text>
              <UnorderedList>
                <ListItem>Write clean and maintainable code</ListItem>
                <ListItem>Implementing pixel perfect designs</ListItem>
                <ListItem>Code Review</ListItem>
                <ListItem>
                  Creating scalable infrastructure using pulumi
                </ListItem>
              </UnorderedList>
            </ProjectDescription>

            <ProjectStack
              technologies={[
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
                'AWS',
                'Pulumi'
              ]}
            />
          </ExperienceProject>
        </ExperienceBody>
      </CompanyExperience>
    </Page>
  );
};
