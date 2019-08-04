import React, { useContext, useCallback } from 'react';
import styles from './App.module.scss';
import { Plant } from "../Plant/Plant";
import { Context } from "../../Context";

export const App = () => {
  const { socket } = useContext(Context);
  const onMessage = useCallback((data: any) => {
    console.log("Message received", data)
  }, []);

  if (socket) {
    socket.on("message", onMessage)
  }

  return (
    <div className={styles.app}>
      <Plant name="Succulents" moisture={30} />
      <Plant name="Avocado" moisture={40} />
      <Plant name="Jasmine" moisture={35} />
      <Plant name="Mint" moisture={36} />
    </div>
  );
}
