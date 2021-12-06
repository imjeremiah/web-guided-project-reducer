import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";


const add = () => {
  return({type:"ADD", payload:2})
}


let currentState = initialState;
console.log(currentState);

currentState = reducer(currentState, add());
console.log(currentState);

// currentState = reducer(currentState, {type:"ADD", payload:10});
// console.log(currentState);

// currentState = reducer(currentState, {type:"ADD", payload:3});
// console.log(currentState);

// currentState = reducer(currentState, {type:"SUBTRACT", payload:6});
// console.log(currentState);

// currentState = reducer(currentState, {type:"ADD_TO_MEMORY"});
// console.log(currentState);

// currentState = reducer(currentState, {type:"CLEAR"});
// console.log(currentState);


export default function App() {
  return (
    <div className="App">
      <textarea rows="1" value="0" id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn">
        +
      </button>
    </div>
  );
}
