// import React from "react";
import "../src/Heading.css";

// export default function App() {
//   return (
//     <div className="box">
//       <h2>Alliance University</h2>
//       <div className="login-box">
//         <form className="studform">
//           <label>Username:</label>
//           <input id = "username" type="text" placeholder="Enter username" required  /><br></br>

//           <label>Password:</label>
//           <input id="password" type="password" placeholder="Enter password" required /><br></br>

//           <button type="submit">Send</button>
//         </form>
//         <p id="para"></p>

//       </div>
//     </div>
//   );
// }
// const studform= document.getElementById("studform")
// const para = document.getElementById("para")
// function Display(event){
//         event.preventDefault()
                  
// const UsernameValue = document.getElementById("username").value;
// const passwordvalue = document.getElementById("password").value;
//  const full = "<b>Student Details:</b><br>"+
// "Username: " + UsernameValue + "<br>"+
// "Password: " + passwordvalue + "<br>";
//  para.innerHTML = full;
// studform.reset();
// }
// studform.addEventListener('submit',Display);
             

//Props and use state in react
// import React from "react";

// function App(props){  //its a parent function
//   return (
//     <h1>Hello,{props.name}</h1>

//   );
// }

 
// // export default App

// function Child(){
//   return(
//     <div>
//       <App name = "Faiz"></App>
//     </div>
//   );
// }

// export default Child

//Self introduction

// import React from "react";

// function App(props){
//   return(
//     <div>
//     <h1>Hello,{props.a}</h1>
//     <p>It's,{props.b}</p>
//     <p>I'm Studying {props.c}</p>
//     <p>College: {props.d}</p>
//     </div>
//   );
// }

// function Child(){
//   return(
//     <div>
//       <App a = "Everyone"
//            b = "Faiz"
//            c = "BCA"
//            d = "Alliance University"></App>
//     </div>
//   );
// }

// export default Child

//Using use state in React

//imp:diff btw use state and props in React

// import React from "react";
import React, {useState} from 'react';

function App(){
  const [count,setCount] = useState(0);
  const Increase = () => {
    setCount(count+1)
  }
  const Decrease = () => {
    setCount(count-1)
  }
  const Zero = () => {
    setCount(0)
  }
  return(
    <div>
      <h1>Number Counting System</h1>
      <p>Count value is: {count}</p>
      <button id="dec_butt" onClick={Decrease}>-</button>
      <button id="zero"onClick={Zero}>0</button>
      <button id="inc_butt"onClick={Increase}>+</button>
    </div>
  );
}

export default App
