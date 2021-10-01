import React from "react";
import styled from "styled-components";

interface smImg{
    img:string;
}

const SmImg: React.FC<smImg> = ({img}) => {
  return <Img src={img}/>;
};

export default SmImg;

const Img = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
