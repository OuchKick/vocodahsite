import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { arch_reg } from '../../utilities/fonts';

function Navbar() {
    return (
        <NavContainer>
            <LogoDiv>

            </LogoDiv>
            <RoutingLinks>
                <HomeNav>Home</HomeNav>
                <MusicNav>Music</MusicNav>
                <ShopNav>Shop</ShopNav>
                <CourseNav>Course</CourseNav>
                <BioNav>Bio</BioNav>
                <ContactNav>Contact</ContactNav>
            </RoutingLinks>
        </NavContainer>


    )
}

export default Navbar;

const NavContainer = styled.div`
display: flex;
height: 5rem;
background-color: #0B071E;
`;

const LogoDiv = styled.div`
height: 5rem;
width: 5rem;
background-color: #05030E;
z-index: 1;
`

const RoutingLinks = styled.div`
display: grid;
grid-template-columns: .1fr .1fr .1fr .1fr .1fr .1fr;
gap: 0px 10px;
color: white;
margin: 1.6rem;
font: ${arch_reg};
font-size: 20px;
`;

const HomeNav = styled.a`
&:hover {
    color: #AA76FD;
    cursor: pointer;
}

`;

const MusicNav = styled.a`
&:hover {
    color: #AA76FD;
    cursor: pointer;
}

`;

const ShopNav = styled.a`
&:hover {
    color: #AA76FD;
    cursor: pointer;
}

`;

const CourseNav = styled.a`
&:hover {
    color: #AA76FD;
    cursor: pointer;
}

`;

const BioNav = styled.a`
&:hover {
    color: #AA76FD;
    cursor: pointer;
}

`;

const ContactNav = styled.a`
&:hover {
    color: #AA76FD;
    cursor: pointer;
}

`;
