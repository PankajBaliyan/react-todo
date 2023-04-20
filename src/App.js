import React, {useState} from 'react'
import ListItem from './components/ListItem'

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
      <input type="text" onChange={inputChangeHandler} value={input}></input>
      <button onClick={addItemToList}>Add</button>
      <div>
        {list.map((item,idx)=>{
            return <ListItem value={item} uniqueId={idx} key={idx} deleteItem={deleteItemFromList}/>
          })}
      </div>
    </React.Fragment>
  );
}

export default App;
