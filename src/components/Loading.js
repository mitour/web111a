import { useState } from "react";

import styled from "@emotion/styled";

import PuffLoader from "react-spinners/PuffLoader";

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const Loading = () => {
  const [color, setColor] = useState("#ffcf56");
  const [size, setSize] = useState(70);

  return (
    <LoadingWrapper>
      <PuffLoader color={color} size={size} />
    </LoadingWrapper>
  );
};

export default Loading;
