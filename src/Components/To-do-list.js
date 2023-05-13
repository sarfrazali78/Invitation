import React, { useState } from "react";
import './To-do-list.css';

export default function Todolist(){
    const [inputlist,setInputlist] = useState("");
    const [items,setItems] = useState([]);


const itemEvents = (event)=> {
setInputlist(event.target.value);
   setInputlist(event.target.value)

};

const handleClicked =() => {
    setItems((olditems)=>{
        return [...olditems,inputlist];
});
setInputlist("");
};

    return(
        <>
     <div className="wrapper">
        <div className="center">
            <br/>
            <h1> ToDo List</h1>
            <input type="text" placeholder="Add a item" onChange={itemEvents}></input>
            <button onClick={handleClicked}> + </button>


            <ol>
                
               { items.map((Itemval) =>{
                    return <li> {Itemval}</li>;
                })}
                    
                
            </ol>
        </div>

     </div>
        </>
    )
            }