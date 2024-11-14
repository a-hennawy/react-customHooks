import React, { useState } from "react";

function useFlip(initValue = false) {
  const [state, setState] = useState(initValue);
  const flipCard = () => {
    setState((isUp) => !isUp);
  };
  return [state, flipCard];
}

export default useFlip;
