import React from 'react';
export const Context = React.createContext({ socket: undefined as SocketIOClient.Socket | undefined });

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
