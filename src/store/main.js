import React, { createContext, useReducer } from "react";

export const WhaleListContext = createContext(null);

export const StateProvider = ({ reducer, initialState, children }) => (
  <WhaleListContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </WhaleListContext.Provider>
);
