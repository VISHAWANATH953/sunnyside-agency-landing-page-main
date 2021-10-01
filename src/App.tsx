import React from "react";
import ClientBox from "./Components/ClientBox";
import Footer from "./Components/Footer";
import ImgInfoBox from "./Components/ImgInfoBox";
import ImgLRInfoBox from "./Components/ImgLRInfoBox";
import Main from "./Components/Main";
import SmImgBox from "./Components/SmImgBox";
import EggImg from "./img/image-transform.jpg";
import GlassImg from "./img/image-stand-out.jpg";

const App: React.FC = () => {
  return (
    <>
      <Main />
      <ImgLRInfoBox
        left={true}
        head={"Transform your brand"}
        desc={
          "We are a full-service creative agency specializing in helping brands grow fast.  Engage your clients through compelling visuals that do most of the marketing for you."
        }
        src={EggImg}
      />
      <ImgLRInfoBox
        left={false}
        head={"Stand out to the right audience"}
        desc={
          "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
        }
        src={GlassImg}
      />
      <ImgInfoBox />
      <ClientBox />
      <SmImgBox />
      <Footer />
    </>
  );
};

export default App;
