import React, { useContext } from "react";

export const TodosContext = useContext();

export const TodosContextProvider = (props) => {
  const { children } = props;
  return <TodosContext.Provider>{children}</TodosContext.Provider>;
};
