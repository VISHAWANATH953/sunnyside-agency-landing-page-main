import React from "react";
import styled from "styled-components";

interface ImgProp {
  src: string;
  head: string;
  desc: string;
}

const ImgInfo: React.FC<ImgProp> = ({ src, head, desc }) => {
  return (
    <ImgBox>
      <Img src={src} />
      <Head>{head}</Head>
      <Desc>{desc}</Desc>
    </ImgBox>
  );
};

export default ImgInfo;

const ImgBox = styled.div`
  display: flex;
  position: relative;
  width: 50vw;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column nowrap;
`;

const Img = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Head = styled.h1`
  margin-bottom: 2.5rem;
`;

const Desc = styled.p`
  font-size: 1.7rem;
  margin-bottom: 5rem;
  padding: 0 10vw;
  text-align: center;
`;
