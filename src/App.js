import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    const newInputVal = event.target.value;
    setInput(newInputVal);
  };

  const addItemToList = () => {
    if (input != "") {
      setList((prevList) => {
        return [...list, input];
      });
    }
    setInput("");
  };

  const deleteItemFromList = (uniqueId) => {
    const newArr = list.filter((item, idx) => {
      return idx !== uniqueId;
    });
    setList(newArr);
    // console.log("deleted Item",uniqueId)
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter" && input !== "") {
      setList((prevList) => {
        return [...list, input];
      });
      setInput("");
      event.preventDefault();
    }
  };


  return (
    <React.Fragment>
      <div id="mainBox">
        <h2>Today main focus</h2>
        <Form>
          <Form.Control
            id="inputBox"
            type="text"
            onChange={inputChangeHandler}
            value={input}
            placeholder="What is your next task ?"
            onKeyPress={handleInputKeyPress}
          />
          <Button variant="info" onClick={addItemToList}>
            Add
          </Button>
        </Form>
        <div className="todo-list">
          <h6>Total Todo's : {list.length}</h6>
          {list.map((item, idx) => {
            return (
              <ListItem
                value={item}
                uniqueId={idx}
                key={idx}
                deleteItem={deleteItemFromList}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
