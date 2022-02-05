import React from 'react';
import { layout } from '../../utils/dataUtil'
import { openSeaProfilePage } from '../../utils/linkUtil';
import { SidebarContainer, Icon, CloseIcon, SidebarButtonWrapper, SidebarRoute, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarStyled';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                {
                    layout.map(item => 
                        <SidebarLink to={item.id} onClick={toggle}>{item.name}</SidebarLink>
                    )
                }
            </SidebarMenu>
            <SidebarButtonWrapper>
                <SidebarRoute href={`${openSeaProfilePage}`} target="_blank">Buy Now</SidebarRoute>
            </SidebarButtonWrapper>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
