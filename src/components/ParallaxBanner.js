import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Headline from "../components/Headline";

import background from "../images/banner/background.jpg";
import foreground from "../images/banner/foreground.png";
import cloud from "../images/banner/cloud.png";
import cloud2 from "../images/banner/cloud2.png";
import forest from "../images/banner/forest.png";
import trees from "../images/banner/trees.png";
import mountain from "../images/banner/mountain.png";
import stars from "../images/banner/stars.png";
import kitty from "../images/headline/kitty.png";

const Stars = () => {
  const ranY = ["50vh", "60vh", "80vh", "45vh", "70vh"];
  const ranX = ["15vw", "10vw", "20vw", "70vw", "80vw"];
  return ranX.map((element, i) => {
    return (
      <>
        <Parallax
          key={element}
          className="position-absolute"
          style={{ top: ranY[i], left: ranX[i] }}
          translateY={[-100, 20]}
          opacity={[0, 1]}
          startScroll={0}
          endScroll={400}
        >
          <img style={{ width: "7px" }} src={stars} alt={stars} />
        </Parallax>
      </>
    );
  });
};

export const Hero = () => {
  return (
    <>
      <ParallaxBanner
        layers={[
          {
            image: background,
            speed: -10,
          },
          {
            speed: -20,
            rotate: [0, "30deg"],
            children: (
              <div style={{ inset: "50%" }} className="position-absolute">
                <img
                  style={{ translate: "-50% -50%" }}
                  src={foreground}
                  alt="earth"
                />
              </div>
            ),
            style: { marginBottom: "20%" },
          },
          {
            speed: -20,
            rotate: ["120deg", "360deg"],
            children: (
              <div style={{ inset: "57%" }} className="position-absolute">
                <img src={cloud} alt="cloud" />
              </div>
            ),
            style: { marginBottom: "20%" },
          },
          {
            speed: -20,
            rotate: ["240deg", "60deg"],
            children: (
              <div style={{ inset: "56%" }} className="position-absolute">
                <img style={{ rotate: "100deg" }} src={cloud2} alt="cloud" />
              </div>
            ),
            style: { marginBottom: "20%" },
          },
          {
            translateY: [5, 40],
            opacity: [1, 0, "easeInQuad"],
            startScroll: 200,
            endScroll: 600,
            children: (
              <div
                style={{ inset: 0 }}
                className="position-absolute d-flex align-items-center justify-content-center text-white"
              >
                <Headline />
              </div>
            ),
          },
        ]}
        className="aspect-[2/1]"
        style={{ marginTop: "-80px", minHeight: "130vh", maxHeight: "1000px" }}
      >
        <Stars />
        <Parallax
          className="position-absolute moving"
          easing="easeOutQuad"
          style={{ bottom: "35vh", right: "25vw" }}
          translateX={[-50, 100]}
          translateY={[-50, 0]}
          scale={[0, 1]}
          rotateX={["100deg", 0]}
          startScroll={200}
          endScroll={400}
        >
          <img style={{ width: "20vw" }} src={kitty} alt="kitty" />
        </Parallax>
        <Parallax
          className="position-absolute"
          easing="easeOutQuad"
          style={{ bottom: 0, right: "70vw" }}
          translateY={[100, 30]}
          startScroll={0}
          endScroll={250}
        >
          <img style={{ width: "30vw" }} src={mountain} alt="mountain" />
        </Parallax>
        <Parallax
          className="position-absolute"
          easing="easeOutQuad"
          style={{ bottom: 0, right: "15vw" }}
          translateY={[100, 35]}
          startScroll={0}
          endScroll={250}
        >
          <img
            style={{ width: "35vw", transform: "scaleX(-1)" }}
            src={mountain}
            alt="mountain"
          />
        </Parallax>
        <Parallax
          className="position-absolute"
          easing="easeOutQuad"
          style={{ bottom: 0, right: 0 }}
          translateY={[100, 30]}
          startScroll={0}
          endScroll={350}
        >
          <img style={{ width: "30vw" }} src={forest} alt="forest" />
        </Parallax>
        <Parallax
          className="position-absolute"
          easing="easeOutQuad"
          style={{ bottom: 0, right: "35vw" }}
          translateY={[100, 30]}
          startScroll={0}
          endScroll={350}
        >
          <img style={{ width: "35vw" }} src={forest} alt="forest" />
        </Parallax>
        <Parallax
          className="position-absolute"
          easing="easeOutQuad"
          style={{ bottom: 0, left: 0 }}
          translateY={[100, 30]}
          startScroll={0}
          endScroll={420}
        >
          <img style={{ width: "30vw" }} src={forest} alt="forest" />
        </Parallax>
        <Parallax
          className="position-absolute"
          easing="easeOutQuad"
          style={{ bottom: 0, right: "20vw" }}
          translateY={[100, 20]}
          startScroll={0}
          endScroll={480}
        >
          <img style={{ width: "20vw" }} src={trees} alt="trees" />
        </Parallax>
        <Parallax
          className="position-absolute"
          easing="easeOutQuad"
          style={{ bottom: 0, left: "25vw" }}
          translateY={[100, 20]}
          startScroll={0}
          endScroll={480}
        >
          <img style={{ width: "20vw" }} src={trees} alt="trees" />
        </Parallax>
      </ParallaxBanner>
    </>
  );
};

export const ParallaxBlock = ({ opacity, children }) => {
  return (
    <>
      <Parallax
        translateY={[50, 0]}
        opacity={opacity ? [0, 1] : "none"}
        shouldAlwaysCompleteAnimation="true"
        easing="easeOutQuad"
      >
        <p className="lh-lg">{children}</p>
      </Parallax>
    </>
  );
};
