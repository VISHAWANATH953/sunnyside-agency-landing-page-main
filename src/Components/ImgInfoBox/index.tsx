import React from "react";
import styled from "styled-components";
import ImgInfo from "./ImgInfo";
import ImgCherry from "../../img/image-graphic-design.jpg";
import ImgOrrange from "../../img/image-photography.jpg";

const ImgInfoBox: React.FC = () => {
  return (
    <ImgInfoCom>
      <ImgInfo
        src={ImgCherry}
        desc="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
"
        head="Graphic Design"
      />
      <ImgInfo
        src={ImgOrrange}
        desc="  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
"
        head="Photography"
      />
    </ImgInfoCom>
  );
};
export default ImgInfoBox;

const ImgInfoCom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;
