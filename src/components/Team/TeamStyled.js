import styled from 'styled-components'

export const TeamContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (min-width: 1920px) {
        height: 1000px;
    }

    @media screen and (max-width: 820px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 1200px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const TeamContentWrapper = styled.div`

    margin-top: -60px;

    @media screen and (min-width: 1920px) {
        margin-top: -150px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }

`;

export const TeamWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const MemberCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`;

export const MemberIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const TeamH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const MemberTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #01BF71;
`;

export const MemberDescription = styled.p`
    font-size: 1rem;
    text-align: center;
`;