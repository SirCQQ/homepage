import React from 'react';
import Page from 'components/core/page';
import Header from 'components/core/header';
import Spacer from 'components/core/spacer';
import {
  ProjectExperience,
  ExperienceCompanyName,
  ExperienceHeader,
  ExperienceCompanyStay
} from 'components/core/experience';

export const Experience = () => {
  return (
    <Page flexDirection="column" alignItems="start" padding="0 15px">
      <Spacer />
      <Header flex="1" h="60px">
        Work experience
      </Header>
      <ProjectExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Osram Continetal</ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2019, 1)}
            endDate={new Date(2021, 3)}
          />
        </ExperienceHeader>
      </ProjectExperience>
      {/* 
      <ProjectExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Skywind </ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2019, 1)}
            endDate={new Date(2020, 3)}
          />
        </ExperienceHeader>
      </ProjectExperience>
      <ProjectExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Bytex</ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2019, 1)}
            endDate={new Date(2020, 3)}
          />
        </ExperienceHeader>
      </ProjectExperience>
      <ProjectExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Seed2Shelf</ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2019, 1)}
            endDate={new Date(2020, 3)}
          />
        </ExperienceHeader>
      </ProjectExperience>
      <ProjectExperience>
        <ExperienceHeader>
          <ExperienceCompanyName>Haufe</ExperienceCompanyName>
          <ExperienceCompanyStay
            startDate={new Date(2019, 1)}
            endDate={new Date(2020, 3)}
          />
        </ExperienceHeader>
      </ProjectExperience>
      <Page>Bar</Page>
      <Page>Baz</Page> */}
    </Page>
  );
};
