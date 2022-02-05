import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    width: 100%;
    background: ${({lightBackground}) => (lightBackground ? '#f9f9f9' : '#000')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 650px;
    width 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1920px) {
        height: 680px;
    }

    @media screen and (max-width: 768px) {
        height: 650px;
        margin-top: -100px;
    }

    @media screen and (max-width: 480px) {
        margin-top: -100px;
    }
`;


export const InfoTextWrapper = styled.div`
    max-width: 540px;
    justify-content: center;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    text-align: center;

    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 17px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const GalleryContainer = styled.div`
    height: 700px;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    margin-top: -230px;

    @media screen and (min-width: 1920px) {
        height: 900px;
    }

    @media screen and (max-width: 768px) {
        height: 650px;
    }

    @media screen and (max-width: 480px) {
        height: 450px;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-row-gap: 25px;
    grid-template-columns: auto auto auto auto auto;
`;

export const GridItem = styled.div`
    color: black;
    width: 1px;
    text-align: center;
    width: fit-content;
`;

export const GridImage = styled.img`
    width: 60%;
    border-radius: 150px;
    background-color: #000;
    border: 3px solid #000;
    cursor: pointer;
    &:hover {
        border: 3px solid #01BF71;
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
    }
`;