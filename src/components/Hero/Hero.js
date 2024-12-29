import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centre>
        Building Web,<br/>
        One Pixel<br/> at a Time
      </SectionTitle>
      <SectionText>
        Hi, I'm Aditya Bodewar, a passionate web developer specializing in React, Next.js, Node.js, and more. Let's turn your ideas into seamless, high-performance websites and apps. Ready to create something amazing together?
      </SectionText>
      <Button onClick={()=>window.location='#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
