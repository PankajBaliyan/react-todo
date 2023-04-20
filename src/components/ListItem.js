import React, { useState } from "react";

// code for strike through line
// const ListItem = (props) =>{
//     const [isDone, setDone] = useState();
//     const cssObj = {
//         textDecoration: 'line-through'
//     }
//     const strikeThroughLine = () =>{
//         if(isDone){
//             setDone(false)
//         } else {
//             setDone(true)
//         }
//     }
//     return (
//         <>
//             {/* code for strikeThroughLine */}
//             <div onClick={strikeThroughLine} style={isDone?cssObj:null}>{props.value}</div>
//         </>
//     )
// }

const ListItem = (props) => {
    const deleteListItem = () => {
        const id = props.uniqueId;
        props.deleteItem(id);
    };
    return (
        <>
            <div className="contentHere" onClick={deleteListItem}>{props.value}</div>
        </>
    );
};

export default ListItem;
