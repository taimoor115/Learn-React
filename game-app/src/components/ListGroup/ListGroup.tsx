import { MouseEvent, useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  color: red;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];
  const [selectedItem, setSelectedItem] = useState(-1);

  // we can do the same thing in better way in below jsx
  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>List no Found</p>*
  //     </>
  //   );

  // With Variable
  // const message = items.length === 0 ? <p>No items Found</p> : null;

  // With Function
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items Found</p> : null;
  // };

  // The function that handle the event called event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  // In runtime react do React.create Element('h1') but at a time it can create one
  // element but below we use separate tags like h1 and ul so getting the errors
  // There are two ways to remove errors
  // Make div element and wrap all elements inside them
  // Secondly import react Fragram from react and wrap them into Fragment
  // But we also do with shorter syntax use empty angle brackets
  return (
    // {items.length === 0 ? <p>No items found</p> : null};
    // We can do same things with variable function and one more
    <>
      <h1>{heading}</h1>
      {/* Same thing with different ways  */}
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {/* 1.{getMessage()} */}
      {/* 2.{message} */}
      {/* {items.length === 0 && <p>No items Found</p>} */}

      {/* Render list  */}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedItem }
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
