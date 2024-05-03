/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { GridProps } from "../App";
import GridItem from "./GridItem";

const StyledGrid = styled.div`
  display: grid;
  border: 3px solid var(--color-borders);
  grid-template-columns: 18rem 18rem 18rem;
  grid-template-rows: 18rem 18rem 18rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 10rem 10rem 10rem;
    grid-template-rows: 10rem 10rem 10rem;
  }
`;

function Grid({ state, dispatch }: GridProps) {
  return (
    <StyledGrid>
      <GridItem id={1} state={state} dispatch={dispatch} />
      <GridItem id={2} state={state} dispatch={dispatch} />
      <GridItem id={3} state={state} dispatch={dispatch} />
      <GridItem id={4} state={state} dispatch={dispatch} />
      <GridItem id={5} state={state} dispatch={dispatch} />
      <GridItem id={6} state={state} dispatch={dispatch} />
      <GridItem id={7} state={state} dispatch={dispatch} />
      <GridItem id={8} state={state} dispatch={dispatch} />
      <GridItem id={9} state={state} dispatch={dispatch} />
    </StyledGrid>
  );
}

export default Grid;
