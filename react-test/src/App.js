import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const name = "은들";
  return (
    <div className="reactTest">
      <form>이름 : {name}</form>
      <apan>비밀번호 : </apan>
      <input type="password"></input>
      <div>
        <button>버튼</button>
      </div>
    </div>
  );
}

export default App;
