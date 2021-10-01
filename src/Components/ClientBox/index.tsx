import React from "react";
import styled from "styled-components";
import Client from "./Client";
import ImgEmily from "../../img/image-emily.jpg";
import ImgThomes from "../../img/image-thomas.jpg";
import ImgJennie from "../../img/image-jennie.jpg";

const ClientBox: React.FC = () => {
  return (
    <ClientBoxDiv>
      <Head>CLIENT TESTIMONIALS</Head>
      <ClientRow>
        <Client
          img={ImgEmily}
          desc="We put our truest in SunnySide and they delivered. making sure our needs were met and deadlines were always hit."
          name="Emily R."
          job="Marketing Director"
        />
        <Client
          img={ImgThomes}
          desc="SunnySide's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          name="Thomas S."
          job="Chief Operating Officer"
        />
        <Client
          img={ImgJennie}
          desc="Incredible end result! Our sales increased over 400% when we worked with Sunnyside Highly recoommended!"
          name="Jennie F."
          job="Business Owner"
        />
      </ClientRow>
    </ClientBoxDiv>
  );
};

export default ClientBox;

const ClientBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  width: 100%;
  height: 100vh;
`;

const Head = styled.h2`
 letter-spacing: .5rem;
 color:#6e6e6e;
`;

const ClientRow = styled.div`
 display: flex;
 align-items: center; 
 justify-content: space-around;
 flex-flow: row nowrap;
 width: 100%;
`;
