import React, { useContext, useCallback, useReducer } from 'react';
import styles from './App.module.scss';
import { Plant } from "../Plant/Plant";
import { Context } from "../../Context";

type Data = [string, number, number];

interface Action {
  type: string;
  payload: { type: string; percentage: number };
}
type State = { [key: string]: number };

const initialState: State = {};
const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "update":
      if (state[action.payload.type] === action.payload.percentage) {
        return state;
      }
      return { ...state, [action.payload.type]: action.payload.percentage }
    default:
      return state;
  }
}

export const App = () => {
  const { socket } = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const onMessage = useCallback((data: Data) => {
    dispatch({
      type: "update",
      payload: { type: data[0], percentage: data[2] },
    })
  }, []);

  if (socket) {
    socket.on("data", onMessage)
  }

  return (
    <div className={styles.app}>
      <Plant name="Succulents" moisture={state.blue} />
      <Plant name="Avocado" moisture={state.purple} />
      <Plant name="Jasmine" moisture={state.black} />
      <Plant name="Mint" moisture={state.yellow} />
    </div>
  );
}
