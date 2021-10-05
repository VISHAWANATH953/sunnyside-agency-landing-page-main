import React from "react";
import styled from "styled-components";
import SmImg from "./SmImg";
import ImgMlikBottle from "../../img/image-gallery-milkbottles.jpg"
import ImgOrange from "../../img/image-gallery-orange.jpg"
import ImgCone from "../../img/image-gallery-cone.jpg"
import ImgCubs from "../../img/image-gallery-sugarcubes.jpg"

const SmImgBox: React.FC = () => {
  return (
    <SmImgDiv>
      <SmImg img={ImgMlikBottle} />
      <SmImg img={ImgOrange} />
      <SmImg img={ImgCone} />
      <SmImg img={ImgCubs} />
    </SmImgDiv>
  );
};

export default SmImgBox;

const SmImgDiv = styled.div`
   width: 100%;
   height: 50vh;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-flow: row wrap;
`;