import { useState, useEffect, useRef } from "react";
import animalKingdom from "../images/animal-kingdom.png";
import cat from "../images/cat.png";
import chameleon from "../images/chameleon.png";
import corgi from "../images/corgi.png";
import crab from "../images/crab.png";
import dolphin from "../images/dolphin.png";
import elephant from "../images/elephant.png";
import jellyfish from "../images/jellyfish.png";
import otter from "../images/otter.png";
import owl from "../images/owl.png";
import parrot from "../images/parrot.png";
import rat from "../images/rat.png";
import shrimp from "../images/shrimp.png";
import sloth from "../images/sloth.png";
import squirrel from "../images/squirrel.png";
import unicorn from "../images/unicorn.png";
import whale from "../images/whale.png";
import panda from "../images/panda.png";
import bear from "../images/bear.png";
import cat1 from "../images/cat1.png";
import lovely from "../images/lovely.png";
import sloth1 from "../images/sloth1.png";
import votes from "../images/votes.png";
import chameleon1 from "../images/whale.png";
import teddyBear from "../images/teddy-bear.png";
import tree from "../images/tree.png";
import kitty from "../images/kitty.png";
import fail from "../images/fail.png";
import ducky from "../images/ducky.png";
import penguin from "../images/penguin.png";
import cat2 from "../images/cat2.png";
import cat3 from "../images/cat3.png";
import mixer from "../images/mixer.png";

function Headline() {
  const imgList = [
    animalKingdom,
    cat,
    chameleon,
    corgi,
    crab,
    dolphin,
    elephant,
    jellyfish,
    otter,
    owl,
    parrot,
    rat,
    shrimp,
    sloth,
    squirrel,
    unicorn,
    whale,
    panda,
    bear,
    cat1,
    lovely,
    sloth1,
    votes,
    chameleon1,
    teddyBear,
    tree,
    kitty,
    fail,
    ducky,
    penguin,
    cat2,
    cat3,
    mixer,
  ];
  const _intervalRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > imgList.length - 1) setCounter(0);
    if (startCounter) {
      _intervalRef.current = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 100);
    } else {
      clearInterval(_intervalRef.current);
    }
    return () => clearInterval(_intervalRef.current);
    // eslint-disable-next-line
  }, [startCounter, counter]);
  return (
    <>
      <div
        onMouseOver={() => setStartCounter(true)}
        onMouseOut={() => setStartCounter(false)}
      >
        <h1 className="display-4 font-notosans fw-bold">
          Welcome to We
          <img
            className="d-none d-sm-inline-block spin-icon align-baseline mx-1"
            src={imgList[counter]}
            alt="{imgList[counter]}"
          />
          Learn
        </h1>
      </div>
    </>
  );
}

export default Headline;
