import React from "react";
import styled from "styled-components";
import LogoFb from "../../svg/icon-facebook.svg";
import LogoTweet from "../../svg/icon-twitter.svg";
import LogoInsta from "../../svg/icon-instagram.svg";
import LogoPin from "../../svg/icon-pinterest.svg";

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <Logo>sunnyside</Logo>
      <LinkDiv>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Projects</Link>
      </LinkDiv>
      <Logos>
        <SocialLogo src={LogoFb} />
        <SocialLogo src={LogoInsta} />
        <SocialLogo src={LogoTweet} />
        <SocialLogo src={LogoPin} />
      </Logos>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.footer`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  background: #3a643a;
`;

const Logo = styled.h1``;

const LinkDiv = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

const Link = styled.li`
  list-style-type: none;
  margin: 0 1rem 2rem 1rem;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

const SocialLogo = styled.img`
  padding: 0 1rem;
  object-fit: cover;
`;
