import React from 'react';
import styled, { keyframes } from 'styled-components';
import { arch_bold } from '../../utilities/fonts';

function Bio() {
    return (
        <BioContainer>
            <BioTitle>About the artist</BioTitle>
            <BioContent>Hey! My name is Anthony Ridenhour (Vocodah) and I am a 
                Professional Beatboxer + Loopstation Artist! I am the 2019 American Beatboxer Champion and the 2020 Online World Beatbox Champion.
                Dubstep and Beatboxing have been both of my passions for music for years now, and when I was thinking out how I wanted to build my style, I thought
                it only made sense to fuse the two! <br></br>
                <br></br>
                After finding what I wanted to do with music, and learning about the process, I realized how unique it is to make music when you what you want.
                That's why I started teaching and building my course! I hope the resources on my website help your career if your a Beatboxer striving to be one of the top!
            </BioContent>
        </BioContainer>

    )
}


export default Bio;


export const slideUpAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;


const BioContainer = styled.div`
margin: 7rem 0 0 16rem;
width: 60%;
animation-name: ${slideUpAnimation};
animation-duration: 1.4s;

`;

const BioTitle = styled.p`
color: #AA76FD;
font: ${arch_bold};
font-size: calc(2em + 1vmin);
`;

const BioContent = styled.p`
color: #CAC9CE;
font-size: calc(.65em + 1vmin);


`;