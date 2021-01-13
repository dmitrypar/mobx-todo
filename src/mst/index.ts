import { applySnapshot, Instance, types } from "mobx-state-tree";
import { v4 as uuidv4 } from "uuid";

const RootModel = types.model("Notes", {
  id: types.identifier,
  labelNote: types.string,
  done: types.boolean,
});

const ListModel = types
  .model("List", {
    todos: types.array(RootModel),
  })
  .actions((self) => {
    function newTask(labelNote: string) {
      const id = uuidv4();
      applySnapshot(self, {
        ...self,
        todos: [...self.todos, { id, labelNote, done: false }],
      });
    }
    return { newTask };
  })
  .actions((self) => ({
    toggle(id: string) {
      self.todos.forEach((item) => {
        if (id === item.id) item.done = !item.done;
      });
    },
  }));

export { ListModel };

export type ListModelType = Instance<typeof ListModel>;
export type RootModelType = Instance<typeof RootModel>;
