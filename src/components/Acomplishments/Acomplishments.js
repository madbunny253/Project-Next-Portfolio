import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { num:'Reading Books', text: 'Currently reading "The Vegiterian" by Han Kang'},
  { num:'Watching Movies', text: 'Whiplash by Damien Chazzelle is my favourite', },
  { num:'Going to gym', text: 'My PR for Leg Press is 170kg and chest press is 50kg', },
  { num:'Being a DJ', text: 'I provide music entertainment at different gatherings or parties', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Hobbies</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.num}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;