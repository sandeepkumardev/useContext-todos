import { createContext } from "react";

export const TodoStore = createContext(null);

const StoreProvider = ({ children }) => {
  const name = "Sachin";
  const email = "HdW7i@example.com";

  return <TodoStore.Provider value={{ name, email }}>{children}</TodoStore.Provider>;
};

export default StoreProvider;
