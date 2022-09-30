import { useState, useEffect, useRef } from "react";
import animalKingdom from "../images/headline/animal-kingdom.png";
import cat from "../images/headline/cat.png";
import chameleon from "../images/headline/chameleon.png";
import corgi from "../images/headline/corgi.png";
import crab from "../images/headline/crab.png";
import dolphin from "../images/headline/dolphin.png";
import elephant from "../images/headline/elephant.png";
import jellyfish from "../images/headline/jellyfish.png";
import otter from "../images/headline/otter.png";
import owl from "../images/headline/owl.png";
import parrot from "../images/headline/parrot.png";
import rat from "../images/headline/rat.png";
import shrimp from "../images/headline/shrimp.png";
import sloth from "../images/headline/sloth.png";
import squirrel from "../images/headline/squirrel.png";
import unicorn from "../images/headline/unicorn.png";
import whale from "../images/headline/whale.png";
import panda from "../images/headline/panda.png";
import bear from "../images/headline/bear.png";
import cat1 from "../images/headline/cat1.png";
import lovely from "../images/headline/lovely.png";
import sloth1 from "../images/headline/sloth1.png";
import votes from "../images/headline/votes.png";
import chameleon1 from "../images/headline/whale.png";
import teddyBear from "../images/headline/teddy-bear.png";
import tree from "../images/headline/tree.png";
import kitty from "../images/headline/kitty.png";
import fail from "../images/headline/fail.png";
import ducky from "../images/headline/ducky.png";
import penguin from "../images/headline/penguin.png";
import cat2 from "../images/headline/cat2.png";
import cat3 from "../images/headline/cat3.png";
import mixer from "../images/headline/mixer.png";

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
