/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { GridProps } from "../App";
import { useEffect, useState } from "react";

const StyledGridItem = styled.div`
  border: 3px solid var(--color-borders);
`;

const x = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M19 5L5 19M5.00001 5L19 19"
        stroke="#6741d9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

const o = (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#6741d9"
    strokeWidth="3"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <circle cx="32" cy="32" r="22"></circle>
    </g>
  </svg>
);

function GridItem({ id, state, dispatch }: { id: number } & GridProps) {
  const [item, setItem] = useState<typeof x | typeof o | null>(null);
  const nOfValues = state.squares.filter((item) => item !== null).length;

  function handleClick() {
    if (item || state.winner) return;
    setItem(state.turn === "x" ? x : o);
    dispatch({ type: "setTurn" });
    dispatch({ type: "setSquare", payload: { id, item: state.turn } });
  }

  useEffect(() => {
    if (nOfValues === 0) setItem(null);
    if (nOfValues > 4) {
      dispatch({ type: "checkWin" });
    }
    if (nOfValues === 9) {
      dispatch({ type: "checkDraw" });
    }
  }, [nOfValues, dispatch]);
  return <StyledGridItem onClick={handleClick}>{item}</StyledGridItem>;
}

export default GridItem;
