// Footer.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Typography } from './common/Typography';

// ... (rest of the component code)
const SocialIcon = styled.a`
  color: black;
  font-size: 1.5rem;
  margin-right: 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffc107;
  }
`;


// color: white;
// background-color: #333;
const FooterContainer = styled.footer`
  background-color: #ffffff;
  color: #333;
  padding: 20px 0;
  box-shadow: rgb(215 221 230) 0 -10px 30px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
`;

const FooterLogo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.a`
  color: #222222;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  font-weight: 400;
  font-family: Lato, sans-serif;


  &:hover {
    color: #ffc107;
  }
`;

const ContactInfo = styled.p`
  margin-top: 20px;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
`;

// const SocialIcon = styled.a`
//   color: white;
//   font-size: 1.5rem;
//   margin-right: 15px;
//   transition: color 0.3s ease;

//   &:hover {
//     color: #ffc107;
//   }
// `;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
             <img src={"/png/b_logo.png"} style={{ height: "68px" }} alt="" />
             <Typography fontSize={'14px'}   color= {'crimson'}>HOUSE OF FASHION</Typography>
        </FooterLogo>
          <FooterLinks>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/men/shirts">Men</FooterLink>
            <FooterLink href="/women/shirts">Women</FooterLink>
            <FooterLink href="/kid/shirts">Kids</FooterLink>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h2>Customer Service</h2>
          <FooterLinks>
            <FooterLink href="/orders">Shipping</FooterLink>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h2>Stay Connected</h2>
          <SocialIcons>
  <SocialIcon href="#">
    <FontAwesomeIcon icon={faFacebookF} />
  </SocialIcon>
  <SocialIcon href="#">
    <FontAwesomeIcon icon={faTwitter} />
  </SocialIcon>
  <SocialIcon href="#">
    <FontAwesomeIcon icon={faInstagram} />
  </SocialIcon>
</SocialIcons>

          <ContactInfo>Email: info@example.com<br />Phone: +1 123-456-7890</ContactInfo>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
