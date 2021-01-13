import { ListModel } from ".";

export const setupRootStore = () => {
  const rootTree = ListModel.create({
    todos: [
      {
        id: "1",
        labelNote: "купить кофе",
        done: false,
      },
    ],
  });
  return { rootTree };
};
