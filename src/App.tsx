import { Provider } from "mobx-react";
import React from "react";
import { TodoItem } from "./components/todoItem/todoItem";
import { setupRootStore } from "./mst/setup";

const App: React.FC = () => {
  const { rootTree } = setupRootStore();
  if (!rootTree) return null;
  return (
    <Provider rootTree={rootTree}>
      <TodoItem />
    </Provider>
  );
};

export default App;
