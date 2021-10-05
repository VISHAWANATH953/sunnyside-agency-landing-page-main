import react, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Logo from "../../svg/logo.svg";
import hamBurger from "../../svg/icon-hamburger.svg";
import arrow from "../../svg/icon-arrow-down.svg";

const Navbar: react.FC = () => {
  const Mobile = useMediaQuery({ query: "(max-width:550px)" });
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navBtnClick = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };
  return (
    <Nav>
      <ImgLogo src={Logo} />
      {!Mobile && (
        <Ul>
          <Li>About</Li>
          <Li>Services</Li>
          <Li>Projects</Li>
          <LiA>contact</LiA>
        </Ul>
      )}
      {Mobile && <Menu src={hamBurger} onClick={navBtnClick} />}
      {Mobile && navOpen && (
        <ShowBox>
          <SmUl>
            <SmLi>About</SmLi>
            <SmLi>Services</SmLi>
            <SmLi>Projects</SmLi>
            <SmLiA>contact</SmLiA>
          </SmUl>
        </ShowBox>
      )}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  padding: 2rem 3rem;
  flex-flow: row nowrap;
  color: #fff;
  font-weight: 600;
  font-size: 1.7rem;
  text-align: center;
  background: transparent;
`;

const ImgLogo = styled.img`
  cursor: pointer;
  height: 4rem;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LiA = styled(Li)`
  border-radius: 2rem;
  background: #fff;
  margin-left: 0.5rem;
  color: #494848;
  height: 4rem;
  width: 10rem;
  text-transform: uppercase;
  &:hover {
    background-color: #ffffff6c;
    color: white;
  }
`;

const Menu = styled.img`
  position: relative;
  object-fit: cover;
  width: 5rem;
  height: auto;
  cursor: pointer;
`;

const ShowBox = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  width: 90vw;
  height: 30vh;
  color: #000;
  background: #fff;
  top: 25vh;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SmUl = styled.div``;

const SmLi = styled(Li)`
  padding: 1rem 0;
`;

const SmLiA = styled(LiA)`
  background: #f6fa00;
  color: #000;
  &:hover {
    background: #fff;
    color: #ffffff6c;
  }
`;
