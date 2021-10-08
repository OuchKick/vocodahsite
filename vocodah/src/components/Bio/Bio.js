import React from 'react';
import styled from 'styled-components';
import { arch_bold } from '../../utilities/fonts';

function Bio() {
    return (
        <BioContainer>
            <BioTitle>About the artist</BioTitle>
        </BioContainer>

    )
}


export default Bio;


const BioContainer = styled.div`

`;

const BioTitle = styled.p`
color: #AA76FD;
font: ${arch_bold};
`;