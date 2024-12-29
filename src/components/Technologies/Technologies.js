import React from 'react';
import { DiCss3, DiFirebase, DiGit, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of Technologies in the Web Development world.
      Also I have keen interest in Cloud Computing.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={'3rem'} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            ReactJS
            <br />
            NextJS
            <br />
            TailwindCSS
            <br />
            Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={'3rem'} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            NodeJS
            <br />
            ExpressJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size={'3rem'} />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            AWS
            <br />
            Git/Github
            <br />
            Vercel
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>

);

export default Technologies;
