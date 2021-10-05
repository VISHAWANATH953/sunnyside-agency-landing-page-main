import React from "react";
import styled from "styled-components";

interface smImg {
  img: string;
}

const SmImg: React.FC<smImg> = ({ img }) => {
  return <Img src={img} />;
};

export default SmImg;

const Img = styled.img`
  height: 50vh;
  width:25vw;
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    flex: inherit;
    flex-basis: 50vw;
    height: 25vh;
  }
`;
