import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [num1, setNum1] = useState();
  var [num2, setNum2] = useState();
  var [ans, setAns] = useState();
  function getNum1(event) {
    setNum1(parseInt(event.target.value, 10));
  }
  function getNum2(event) {
    setNum2(parseInt(event.target.value, 10));
  }
  function addition() {
    setAns(num1 + num2);
  }
  function subraction() {
    setAns(num1 - num2);
  }
  function multiplication() {
    setAns(num1 * num2);
  }
  function division() {
    setAns(num1 / num2);
  }
  return (
    <div className="App">
      <label for="num-1">number 1</label>
      <input type="number" id="num-1" onChange={getNum1}></input>
      <label for="num-2">number 2</label>
      <input type="number" id="num-2" onChange={getNum2}></input>

      <button id="add" onClick={addition}>
        +
      </button>

      <button id="sub" onClick={subraction}>
        -
      </button>

      <button id="mul" onClick={multiplication}>
        x
      </button>

      <button id="div" onClick={division}>
        /
      </button>
      <div
        style={{
          border: "5px solid black",
          padding: "500px;",
          backgroundColor: "red"
        }}
      >
        Your Ans will be displayed here :{ans}
      </div>
    </div>
  );
}
