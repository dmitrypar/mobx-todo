import { inject, observer } from "mobx-react";
import * as React from "react";
import { ListModelType } from "../../mst";
import "./todoItem.scss";
import {
  MainContainer,
  ItemContainer,
  Form,
  TextInput,
  Button,
  CheckedItem,
  CheckBoxInput,
} from "../../styles/сustom";

type PropTypes = {
  rootTree?: ListModelType;
};

const TodoItem = inject("rootTree")(
  observer((props: PropTypes) => {
    
    const { rootTree } = props;
    const [newLabel, setNewLabel] = React.useState("");
    if (!rootTree) return null;
    const inputLabelHandler = (e: any) => {
      const newInputLabel = e.target.value;
      setNewLabel(newInputLabel);
    };

    const onSubmit = (e: any) => {
      e.preventDefault();
      if (!rootTree) return null;
      rootTree.newTask(newLabel);
      setNewLabel("");
    };

    const filtredItems = rootTree.todos.filter(
      (item) =>
        item.labelNote.toLowerCase().indexOf(newLabel.toLowerCase()) > -1
    );

    const onItemClickHandler = (id: string) => {
      rootTree.toggle(id);
    };

    return (
      <MainContainer>
        <ItemContainer>
          <Form onSubmit={onSubmit}>
            <TextInput
              value={newLabel}
              onChange={inputLabelHandler}
              type="text"
            />
            <Button>Добавить</Button>
          </Form>

          {filtredItems.map((item) => {
            const { id, labelNote, done } = item;
            return (
              <CheckedItem checked={done} key={id}>
                <CheckBoxInput
                  onClick={() => onItemClickHandler(id)}
                  type="checkbox"
                />
                {labelNote}
              </CheckedItem>
            );
          })}
        </ItemContainer>
      </MainContainer>
    );
  })
);

export { TodoItem };
