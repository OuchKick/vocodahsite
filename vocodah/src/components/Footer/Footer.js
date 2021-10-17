import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Twitter} from '../../images/twitter.svg';
import {ReactComponent as Facebook} from '../../images/facebook.svg';
import {ReactComponent as Insta} from '../../images/instagram.svg';
import {ReactComponent as Spotify} from '../../images/spotify.svg';
import {ReactComponent as Youtube} from '../../images/youtube.svg';
import { arch_bold } from '../../utilities/fonts';

function Footer() {
    return (

        <FooterContainer>
            <Socials>
            <SocialLinkSpacingA href="https://twitter.com/vocodah" target='_blank' rel='noreferrer'>
                <Twitter fill='#FAF9F6' style={{height: '25px'}}/>
            </SocialLinkSpacingA>
            <SocialLinkSpacingA href="https://www.facebook.com/Vocodah/" target='_blank' rel='noreferrer'>
                <Facebook fill='#FAF9F6' style={{height: '25px'}}/>
            </SocialLinkSpacingA>
            <SocialLinkSpacingA href="https://www.instagram.com/vocodah/" target='_blank' rel='noreferrer'>
                <Insta fill='#FAF9F6' style={{height: '25px'}}/>
            </SocialLinkSpacingA>
            <SocialLinkSpacingA href="https://open.spotify.com/artist/7o0nwhR2sQrR7sRDN3u10c" target='_blank' rel='noreferrer'>
                <Spotify fill='#FAF9F6' style={{height: '25px'}}/>
            </SocialLinkSpacingA>
            <SocialLinkSpacingA href="https://open.spotify.com/artist/7o0nwhR2sQrR7sRDN3u10c" target='_blank' rel='noreferrer'>
                <Youtube fill='#FAF9F6' style={{height: '25px'}}/>
            </SocialLinkSpacingA>
            <Vocodah>| &#160;Vocodah Music </Vocodah>
            </Socials>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    position: fixed;
    background-color: rgb(170, 118, 253, .1);
    height: 5rem;
    width: 100%;
    bottom: 0;
    left: 0;
`;

const Socials = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.4%;
`;

const Vocodah = styled.p`
    color: white;
    font-size: px;
    margin-top: 0 !important;
    margin-left: 10px;
    font: ${arch_bold};
`;

const SocialLinkSpacingA = styled.a`
    padding-left: .5%;

`;