import React from 'react'
import { useState } from 'react'
// import './students.css'

function Students() {
const[name, setName] = useState("")
const[subject, setSubject] = useState("")
const[rollno, setRollno] = useState()       // useStates for storing the values from input
const[marks, setMarks] = useState()

const[arr, setArr] = useState([])   // useState for storing the values in the array

function handle(){                // function for button
    let obj={                      
        name:name,                // created a variable obj for storing each student data with key name and value 
        subject:subject,
        marks:marks,
        rollno:rollno,
    }
    setArr([...arr, obj])        // here we are destructuring the arr using ...(spread operator) with the obj
}

  return (
    <div className='Wrapper'>   
        <h1>Student Data Sheet</h1>
        <div className='input'>
        <input type='text' value={name} placeholder='name' onChange={(e)=>setName(e.target.value)}></input>
        <input type='text' value={subject} placeholder='subject' onChange={(e)=>setSubject(e.target.value)}></input>
        <input type='number' value={rollno} placeholder='rollno' onChange={(e)=>setRollno(e.target.value)}></input>
        <input type='number' value={marks} placeholder='marks' onChange={(e)=>setMarks(e.target.value)}></input>
        <button onClick={handle}>submit</button>
        </div>
        

        <div className='table-result'>
        {
            arr.map((data,index)=>(         // using map method to go through the array with data property
                <table>       
                <tr key={index}>             
                <td><th>Name</th>{data.name}</td>         {/* {data.name} is to display the value in name.  */}
                <td><th>subject</th>{data.subject}</td>
                <td><th>RollNo</th>{data.rollno}</td>
                <td><th>Marks</th>{data.marks}</td>
               </tr>
               </table>
            ))
        }
        
        </div>
    </div>
  )
}

export default Students;