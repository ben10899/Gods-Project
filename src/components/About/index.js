import React from 'react';
import about from '../../resources/image/about.svg'
import { ScrollButton } from '../Common/ButtonStyled'
import { InfoContainer, InfoWrapper, InfoRow, InfoColumn1, InfoColumn2, InfoTextWrapper, TopLine, Heading, Subtitle, ButtonWrapper, Image, ImageWrapper } from './AboutStyled';

const About = () => {
  return (
    <>
      <InfoContainer lightBackground={false} id='about'>
        <InfoWrapper>
            <InfoRow imageStart={false}>
                <InfoColumn1>
                    <InfoTextWrapper>
                        <TopLine>About God's Project</TopLine>
                        <Heading lightText={true}>Gods' Deck of Cards</Heading>
                        <Subtitle darkText={false}>A NFT collection of 52 digital collectibles based on the Standard 52 card deck blessed by the Greek Gods.</Subtitle>
                        <ButtonWrapper>
                          <ScrollButton to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={true} dark={true}>Buy Now</ScrollButton>
                        </ButtonWrapper>
                    </InfoTextWrapper>
                </InfoColumn1>
                <InfoColumn2>
                    <ImageWrapper>
                        <Image src={about}/> 
                    </ImageWrapper>
                </InfoColumn2>
            </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default About;