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
  `;
  return <Img src={src} />;
};

export default ImgCom;
