import { useState } from "react";
import { createContext } from "react";

export const TodoStore = createContext(null);

const StoreProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return <TodoStore.Provider value={{ todos, setTodos }}>{children}</TodoStore.Provider>;
};

export default StoreProvider;
