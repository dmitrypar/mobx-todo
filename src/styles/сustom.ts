import styled from "styled-components";

type CheckibleItemType = {
  checked: any;
};

const mainColor = "blue";

export const TextInput = styled.input`
  padding: 5px;
  border: 2px solid ${mainColor};
  margin-right: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin: 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Form = styled.form`
  display: flex;
  margin: 50px 0 50px 0;
`;

export const Button = styled.button`
  padding: 5px;
  border: 2px solid ${mainColor};
  border-radius: 3px;
  color: ${mainColor};
  background-color: Transparent;
`;

export const ItemWrapper = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  align-items: center;
  color: ${mainColor};
`;

export const CheckedItem = styled(ItemWrapper)`
  background-color: ${(props: CheckibleItemType) =>
    props.checked ? "#F3FFD5" : "Transparent"};
`;

export const CheckBoxInput = styled.input`
  margin: 0 10px -2px 0;
`;
