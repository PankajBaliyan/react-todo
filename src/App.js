import React, {useState} from 'react'
import ListItem from './components/ListItem'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const inputChangeHandler = (event) =>{
    const newInputVal = event.target.value;
    setInput(newInputVal);
  }

  const addItemToList = () =>{
    setList((prevList) => {
      return [...list, input];
    });
    setInput('')
  }

  const deleteItemFromList = (uniqueId) =>{
    const newArr = list.filter((item,idx)=>{
      return idx !== uniqueId
    });
    setList(newArr)
    console.log("deleted Item",uniqueId)
  }

  return (
    <React.Fragment>
    <div id='mainBox'>
        <h2>Today main focus</h2>
          <Form>
            <Form.Control id='inputBox' type="text" onChange={inputChangeHandler} value={input} placeholder="What is your next task ?" />
            <Button variant="info" onClick={addItemToList}>Add</Button>
        </Form>
        <div>
          {list.map((item,idx)=>{
              return <ListItem value={item} uniqueId={idx} key={idx} deleteItem={deleteItemFromList}/>
            })}
        </div>
    </div>
    </React.Fragment>
  );
}

export default App;
