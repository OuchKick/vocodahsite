import React from 'react';
import styled, {keyframes} from 'styled-components';
import { arch_bold } from '../../utilities/fonts';
import { slideUpAnimation } from '../Bio/Bio';





function Mailer() {
    return (
        <MailerContainer>
        <ContactFormContainer>
            <ContactTitle>Let's connect!</ContactTitle>
            <ContactForm>
                <ContactName>Name</ContactName>
                <ContactInput type="text" name="name"/>

                <ContactName>Email</ContactName>
                <ContactInput type="text" name="user_email" />

                <ContactName>Message</ContactName>
                <textarea name="message" rows='4' style={{resize: 'none'}}/>
                <InputButtonContainer>
                <SendInput type='submit' value='Send'/>
                </InputButtonContainer>
            </ContactForm>
        </ContactFormContainer>
        </MailerContainer>

    )

}

export default Mailer;


const MailerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    animation-name: ${slideUpAnimation};
    animation-duration: 1.4s;
`;

const steam = keyframes`
0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
`;

const ContactFormContainer = styled.div`
position: relative;
width: 45em;
height: 32em;
background: rgba( 11, 7, 30, 1 );
&:before, &:after {
    content: '';
	position: absolute;
	left: -2px;
	top: -2px;
	background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00,#ffff00, #ff0000, #fb0094, 
		#0000ff, #00ff00,#ffff00, #ff0000);
	background-size: 400%;
	width: calc(100% + 4px);
	height: calc(100% + 4px);
	z-index: -1;
	animation: ${steam} 20s linear infinite;
}
&:after {
    filter: blur(10px)
}
`;


const ContactTitle = styled.p`
text-align: center;
color: #AA76FD;
font: ${arch_bold};
font-size: calc(2em + 1vmin);
`;



const ContactForm = styled.form`
display: flex;
flex-direction: column;
margin: 15px;
color: white;
`;


const ContactName = styled.label`
color: #AA76FD;
font: ${arch_bold};
font-size: calc(2em + 1vmin);
`;

const ContactInput = styled.input`
    width: 200px;
`;

const InputButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 27px;
`

const SendInput = styled.input`
   width: 10em;
   background: rgba( 11, 7, 30, 1 );
   color: #AA76FD;
   font: ${arch_bold};
   border-radius: 5px;
`;
