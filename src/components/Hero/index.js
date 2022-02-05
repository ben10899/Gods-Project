import React, {useState} from 'react';
import Video from '../../resources/video/video.mp4'
import { Button } from '../Common/ButtonStyled';
import { openSeaProfilePage } from '../../utils/linkUtil';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroButtonWrapper, ArrowForward, ArrowRight } from './HeroStyled';

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
      setHover(!hover)
  }

  return (
    <HeroContainer id="home">
        <HeroBackground>
            <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBackground>
        <HeroContent>
            <HeroH1>Welcome to God's Project</HeroH1>
            <HeroP>A NFT collection of 52 digital collectibles based on the Standard 52 card deck blessed by the Greek Gods.</HeroP>
            <HeroButtonWrapper>
                <Button href={`${openSeaProfilePage}`} target="_blank" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>Buy Now at OpenSEA {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroButtonWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
