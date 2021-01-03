import React from 'react';
import {Button} from '../../globalStyles';
import {FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,FooterLinksContainer, FooterLinkWrapper, FooterLinkTitle, FooterLink, FooterLinksItems} from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join us to get regular updates about the Health World.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email'/>
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>Vision</FooterLink>
                        <FooterLink to='/'>Board Members</FooterLink>
                        <FooterLink to='/'>Blog</FooterLink>
                        <FooterLink to='/'>Hospitals in India</FooterLink>
                    </FooterLinksItems>
                </FooterLinkWrapper>
                <FooterLinkWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Services</FooterLink>
                        <FooterLink to='/'>Terms of Services</FooterLink>
                    </FooterLinksItems>
                </FooterLinkWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Services</FooterLinkTitle>
                        <FooterLink to='/'>Admission Process</FooterLink>
                        <FooterLink to='/'>Discharge Process</FooterLink>
                        <FooterLink to='/'>Clinical Outcomes</FooterLink>
                        <FooterLink to='/'>Online Doctor Consultant</FooterLink>
                    </FooterLinksItems>
                <FooterLinkWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinkWrapper>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer
