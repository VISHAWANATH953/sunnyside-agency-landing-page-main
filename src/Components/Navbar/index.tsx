import react from "react";
import styled from "styled-components";
import Logo from "../../svg/logo.svg";

const Navbar: react.FC = () => {
  const SmNav: boolean = false;
  return (
    <Nav>
      <ImgLogo src={Logo} />
      {!SmNav && (
        <Ul>
          <Li>About</Li>
          <Li>Services</Li>
          <Li>Projects</Li>
          <LiA>contact</LiA>
        </Ul>
      )}
      {SmNav && <Menu />}
      {SmNav && (
        <ShowBox>
          <SmUl>
            <SmLi></SmLi>
            <SmLi></SmLi>
            <SmLi></SmLi>
            <SmLiA></SmLiA>
          </SmUl>
        </ShowBox>
      )}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  padding: 2rem 3rem;
  flex-flow: row nowrap;
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 600;
  font-size: 1.7rem;
  text-align: center;
  background: transparent;
`;

const ImgLogo = styled.img`
  cursor: pointer;
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

const Menu = styled.img``;

const ShowBox = styled.div``;

const SmUl = styled.div``;

const SmLi = styled.li``;

const SmLiA = styled.li``;
