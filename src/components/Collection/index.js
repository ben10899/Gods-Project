import React, {useState} from 'react';
import Select from 'react-select';
import { diamonds, clubs, hearts, spades } from '../../utils/cardUtil'
import { openSeaProfilePage } from '../../utils/linkUtil';
import { InfoContainer, InfoWrapper, InfoTextWrapper, TopLine, Heading, Subtitle, ButtonWrapper, GalleryContainer, GridContainer, GridItem, GridImage} from './CollectionStyled';

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#01bf71' : 'black',
      background: state.isSelected ? '#eeeeee' : 'white',
      cursor: 'pointer',
      '&:hover': {
        background: "#eeeeee",
        transition: 'all 0.2s ease-in-out',
     }
    }),
    control: (provided) => ({
        ...provided,
        background: "#000",
        border: 0,
        boxShadow: 'none',
        cursor: 'pointer',
        '&:hover': {
            background: "#01bf71",
            transform: 'scale(1.02)',
            transition: 'all 0.2s ease-in-out',
         }
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#fff',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#fff',
        '&:hover': {
            color: '#fff',
        }
    })
}

const Collection = () => {

const suits = [
    { value: 'diamonds', label: 'Diamonds' },
    { value: 'clubs', label: 'Clubs'},
    { value: 'hearts', label: 'Hearts'},
    { value: 'spades', label: 'Spades'},
];

const [suit, setSuit] = useState(suits[0].label)

const renderGallery = () => {
    if (suit === 'Diamonds') {
        return diamonds
    } else if (suit === 'Clubs') {
        return clubs
    } else if (suit === 'Hearts') {
        return hearts
    } else if (suit === 'Spades') {
        return spades
    }
}
    
return (
<>
    <InfoContainer lightBackground={true} id='collection'>
    <InfoWrapper>
        <InfoTextWrapper>
            <TopLine>The Collection</TopLine>
            <Heading lightText={false}>{suit} Series</Heading>
            <Subtitle darkText={true}>Each series contains 13 unique pieces that represents each Greek God for the 4 Card Suits. Do you have the right cards to make the right play?</Subtitle>
            <ButtonWrapper>
                <div style={{width: '60%', marginLeft: '20%'}}>
                    <Select 
                        styles={customStyles} 
                        defaultValue={suits[0]} 
                        options={suits} 
                        isSearchable={false}
                        onChange={(values) => setSuit(values.label)}
                    />
                </div>
            </ButtonWrapper>
        </InfoTextWrapper>
    </InfoWrapper>
    <GalleryContainer>
        <GridContainer>
            { renderGallery().map(card => <GridItem><a class={card.assetLink ? '' : 'disabled'} href={`${openSeaProfilePage}${card.assetLink}`} rel="noreferrer" target='_blank'><GridImage src={card.image} alt={card.name}/></a></GridItem>)}
        </GridContainer>
    </GalleryContainer>
    </InfoContainer>

</>
);
};

export default Collection;