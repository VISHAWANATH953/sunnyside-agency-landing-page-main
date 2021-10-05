import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import HeaderImg from "../../img/image-header.jpg";

const Main: React.FC = () => {
  return (
      <>
      <Navbar />
      <MainDiv />
       </> 
  );
};

export default Main;

const MainDiv = styled.div`
   background:url(${HeaderImg}) no-repeat;
   background-size: cover;
   background-position: center;
   z-index:-1;
   width: 100%;
   height: 100vh;

`;
