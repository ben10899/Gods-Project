import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { layout } from '../../utils/dataUtil'
import { openSeaProfilePage } from '../../utils/linkUtil';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavButton, NavButtonLink} from './NavbarStyled'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>God's Project</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    {
                        layout.map(item =>
                            <NavItem>
                                <NavLinks to={item.id} smooth={true} duration={500} spy={true} exact="true" offset={-80}>{item.name}</NavLinks>
                            </NavItem>    
                        )
                    }
                </NavMenu>
                <NavButton>
                    <NavButtonLink href={`${openSeaProfilePage}`} target="_blank">Buy Now</NavButtonLink>
                </NavButton>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar;