import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";

let currentState = initialState;
console.log(currentState);

currentState = reducer(currentState, {type:"ADD", payload:2});
console.log(currentState);


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
