import React, { useState, useEffect, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
};

// Custom Hook
// https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com
const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalState };
