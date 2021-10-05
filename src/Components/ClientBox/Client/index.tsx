import React from "react";
import styled from "styled-components";

interface client {
  img: string;
  desc: string;
  name: string;
  job: string;
}

const Client: React.FC<client> = ({ img, desc, name, job }) => {
  return (
    <ClientDiv>
      <Img src={img} />
      <Desc>{desc}</Desc>
      <ClientInfo>
        <Name>{name}</Name>
        <Job>{job}</Job>
      </ClientInfo>
    </ClientDiv>
  );
};

export default Client;

const ClientDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
`;

const Desc = styled.p`
  margin: 8rem 0 2.5rem 0;
  padding: 0 2vw;
  font-size: 1.7rem;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    margin: 2.5rem 0;
  }
`;

const ClientInfo = styled.div`
  margin-bottom: 2rem;
`;

const Name = styled.h3``;

const Job = styled.p``;
