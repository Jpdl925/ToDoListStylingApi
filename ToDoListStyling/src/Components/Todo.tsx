import { useState } from "react";
import styles from "./Todo.module.css";

interface ToDoProps {
  id: number;
  todo: string;
  style:string;
}

const Todo = () => {
  // Create useState for user input that can be added to the ToDoList
  const [input, setInput] = useState("");

  /* Create array that can be updated, deleted, and created */
  const [list, setList] = useState<ToDoProps[]>([]);

  //   Function to handle adding new items to list
  const handleAdd = (newItem: string) => {
    // Creating a new list with item added onto it by copying and adding it to last index place
    const newList: ToDoProps = {
      id: Math.random(),
      todo: newItem,
      style: ''
    };
    setList([...list, newList]);
    // Clearing out input field for user to insert another item from blank
    setInput("");
  };

  //   Function to delete an item
  const handleDelete = (deletingItem) => {
    console.log(deletingItem);
    //   Filtering out item that matches with id given to delete
    const newItems = list.filter((item) => item.id !== deletingItem);
    //   Setting current list to newly made list with removed item
    setList(newItems);
  };

  const styling = (item) => {
    console.log(item);
    item.style = '{styles.checked}';
    console.log(item);
  };

  return (
    <>
      {/* Main Title Displaying */}
      <h1 className={styles.mainTxt}>To Do List</h1>
      <div className={styles.inputbox}>
      {/* Input box for user to add custome Items */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Button To add item to list */}
      <button onClick={() => handleAdd(input)}>Add</button>
      </div>
      {/* Title for to do list */}
      <ul className={styles.list}>
        To Do Items:
        {/* Mapping out each item after being added by user, along with a button to delete */}
        {list.map((item) => (
          // ContentEditable makes the text itself editable
          <div className={styles.item} contentEditable="true">
            <div contentEditable="false">
              <button onClick={() => styling(item)}>✔</button>
            </div>
            <li className={item.style} key={item.id}>
              {item.todo}
              <div contentEditable="false">
                <button onClick={() => handleDelete(item.id)}>x</button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Todo;
