import { useReducer } from "react";
import GlobalStyles from "./ui/GlobalStyles";
import Grid from "./components/Grid";
import styled from "styled-components";
import { checkWin } from "./utils/winner";

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Developer = styled.aside`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.8rem;
  color: #495057;
  @media screen and (max-width: 768px) {
    left: auto;
    font-size: 1.4rem;
  }
`;

const Header = styled.h1`
  font-size: 4.8rem;
  color: #6741d9;
`;

const Message = styled.h1`
  font-size: 3.2rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const NewGame = styled.button`
  background-color: #6741d9;
  margin-left: 1.8rem;
  padding: 0.8rem;
  font-size: 2.4rem;
  color: #f3f0ff;
  font-weight: 600;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

type Square = "x" | "o" | null;
type State = {
  turn: "x" | "o";
  squares: Square[];
  winner: "x" | "o" | null;
  draw: boolean;
};

type Action =
  | { type: "setTurn" }
  | { type: "setSquare"; payload: { id: number; item: Square } }
  | { type: "checkWin" }
  | { type: "checkDraw" }
  | { type: "newGame" };

const initialState: State = {
  turn: "x",
  squares: Array(9).fill(null),
  winner: null,
  draw: false,
};

export type GridProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setTurn":
      return { ...state, turn: state.turn === "x" ? "o" : "x" };
    case "setSquare":
      return {
        ...state,
        squares: state.squares.map((item, i) =>
          i + 1 === action.payload.id ? action.payload.item : item
        ),
      };
    case "checkWin":
      return { ...state, winner: checkWin(state.squares) };
    case "checkDraw":
      return {
        ...state,
        draw: true,
      };
    case "newGame":
      return initialState;
    default:
      return state;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myName = "Kleant Bajraktari";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledApp>
      <GlobalStyles />
      <Developer>Zhvilluar nga: </Developer>
      <Header>Cic-Mic</Header>
      <Grid state={state} dispatch={dispatch} />

      {state.winner && (
        <Message>
          {state.winner === "x" ? "X" : "O"} FITON!{" "}
          <NewGame onClick={() => dispatch({ type: "newGame" })}>
            Lojë e Re
          </NewGame>
        </Message>
      )}
      {state.draw && (
        <Message>
          Barazim!{" "}
          <NewGame onClick={() => dispatch({ type: "newGame" })}>
            Lojë e Re
          </NewGame>
        </Message>
      )}
    </StyledApp>
  );
}

export default App;
