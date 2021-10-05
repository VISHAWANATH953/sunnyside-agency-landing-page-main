import React from "react";
import styled from "styled-components";

interface data {
  head: string;
  desc: string;
  left: boolean;
}

const InfoCom: React.FC<data> = ({ head, desc, left }) => {
  const Link = styled.a`
    text-transform: uppercase;
    border-bottom: 0.25rem solid ${left ? "yellow" : "pink"};
    font-size: 1.6rem;
    font-weight: 700;
  `;
  return (
    <Info>
      <Head>{head}</Head>
      <Desc>{desc}</Desc>
      <Link>learn more</Link>
    </Info>
  );
};

export default InfoCom;

const Info = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 0 2vw;

  @media only screen and (max-width: 768px) {
    flex: inherit;
    width: 100vw;
    height: 50vh;
    text-align: center;
    align-items: center;
  }
`;

const Head = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  @media only screen and (max-width:768px){
    font-size:3rem;
  }
`;

const Desc = styled.p`
  font-size: 1.45rem;
  margin-bottom: 2rem;
`;
