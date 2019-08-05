import React, { useContext, useCallback, useReducer } from 'react';
import styles from './App.module.scss';
import { Plant } from "../Plant/Plant";
import { Context } from "../../Context";
import { plantMap } from "../../planties";

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
      {plantMap.map(({ name, moistureSensorKey }, i) => (
        <Plant key={i} name={name} moisture={state[moistureSensorKey]} />
      ))}
    </div>
  );
}
