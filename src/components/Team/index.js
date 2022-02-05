import React from 'react';
import {members} from '../../utils/dataUtil'
import {TeamContainer, TeamH1, TeamWrapper, TeamContentWrapper, MemberCard, MemberIcon, MemberTitle, MemberDescription} from './TeamStyled'

const Team = () => {
  return (
    <TeamContainer id='team'>
        <TeamContentWrapper>
            <TeamH1>Meet the Team</TeamH1>
            <TeamWrapper>
                {
                    members.map(member => 
                        <MemberCard>
                            <MemberIcon src={member.icon}/>
                            <MemberTitle>{member.name}</MemberTitle>
                            <MemberDescription>{member.description}</MemberDescription>
                        </MemberCard>
                    )
                }
            </TeamWrapper>
        </TeamContentWrapper>
    </TeamContainer>
  );
};

export default Team;
