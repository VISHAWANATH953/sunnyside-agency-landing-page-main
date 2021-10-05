import React from "react";
import styled from "styled-components";
import ImgCom from "./ImgCom";
import InfoCom from "./InfoCom";

interface bool {
  left: boolean;
  head: string;
  desc: string;
  src: string;
}

const ImgLRInfoBox: React.FC<bool> = ({ left, head, desc, src }) => {
  return (
    <ImgLRInfo>
      {left && (
        <>
          <InfoCom head={head} desc={desc} left={left} />
          <ImgCom src={src} />
        </>
      )}
      {!left && (
        <>
          <ImgCom src={src} />
          <InfoCom head={head} desc={desc} left={left} />
        </>
      )}
    </ImgLRInfo>
  );
};
export default ImgLRInfoBox;

const ImgLRInfo = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-flow: row wrap;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
