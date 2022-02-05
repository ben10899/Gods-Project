import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { facebookPage, instagramPage } from '../../utils/linkUtil';
import { FooterContainer, FooterWrapper, SocialLogo, SocialIconLink, SocialIcons, SocialMediaWrapper, SocialMedia, WebsiteRights } from './FooterStyled'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80}>God's Project</SocialLogo>
                    <WebsiteRights>God's Project © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href={`${facebookPage}`} target='_blank'><FaFacebook /></SocialIconLink>
                        <SocialIconLink href={`${instagramPage}`} target='_blank'><FaInstagram /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
