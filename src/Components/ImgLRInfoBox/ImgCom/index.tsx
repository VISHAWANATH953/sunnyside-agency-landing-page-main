import React from "react";
import styled from "styled-components";

interface img {
  src: string;
}

const ImgCom: React.FC<img> = ({ src }) => {
  const Img = styled.img`
    width: 50vw;
    height: 100%;
    object-fit: cover;

  @media only screen and (max-width: 768px) {
   width  : 100vw;
   height:50vh;
  }
  `;
  return <Img src={src} />;
};

export default ImgCom;
