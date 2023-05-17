import React from 'react'
import {useNavigate} from 'react-router-dom'






const Coool =()=>{
    const navigate = useNavigate()
  
    function handleHome (){
       navigate('/home')
    }
function handleAboutus (){
    navigate('/about-us')
}
function handleLogin (){
    navigate('/login')
}
function handleRegister (){
    navigate('/register')
}


    return(
        <div>
             <span onClick={handleHome}>Home</span>
             <span onClick={handleAboutus}>About us</span>
             <span onClick={handleLogin}>Login</span>
             <span onClick={handleRegister}>Register</span>
           
        </div>
       
    );
    }
    export default Coool;
 