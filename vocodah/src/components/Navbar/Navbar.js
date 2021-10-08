import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { arch_reg } from '../../utilities/fonts';
import Logo from '../../images/vocodahCircle.png';


function Navbar() {
    return (
        <NavContainer>
            <LogoDiv>
                <a href="/">
                <LogoPlacement src = {Logo}/>
                </a>
            </LogoDiv>
            <RoutingLinks>
                <HomeNav to ='/'>Home</HomeNav>
                <MusicNav>Music</MusicNav>
                <ShopNav>Shop</ShopNav>
                <CourseNav>Course</CourseNav>
                <BioNav to ='/Bio'>Bio</BioNav>
                <ContactNav>Contact</ContactNav>
            </RoutingLinks>
        </NavContainer>


    )
}

export default Navbar;

const NavContainer = styled.div`
display: flex;
height: 7rem;
width: 100%;
background-color: #0B071E;
filter: drop-shadow(0px 10px 10px #05030E);


`;

const LogoDiv = styled.div`
display: flex;
justify-content: center;
height: 7rem;
width: 10rem;
background-color: #05030E;
z-index: 1;
`;

const LogoPlacement = styled.img`
width: 80%;
height: 80%;
object-fit: contain;
margin-top: .7rem;
`;

const RoutingLinks = styled.div`
position: absolute;
display: grid;
grid-template-columns: .1fr .1fr .1fr .1fr .1fr .1fr;
gap: 0px 10px;
color: white;
margin: 2.7rem 0 0 12rem;
font: ${arch_reg};
font-size: 22px;
`;

const HomeNav = styled(Link)`
text-decoration: none;
color: inherit;
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

const BioNav = styled(Link)`
text-decoration: none;
color: inherit;
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

