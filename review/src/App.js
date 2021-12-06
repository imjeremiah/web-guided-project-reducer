import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";
import { add, subtract, addToMemory, clear} from './actions/calcActions';


let currentState = initialState;
console.log(currentState);

currentState = reducer(currentState, add(2));
console.log(currentState);

currentState = reducer(currentState, add(3));
console.log(currentState);

currentState = reducer(currentState, subtract(20));
console.log(currentState);

currentState = reducer(currentState, addToMemory());
console.log(currentState);

currentState = reducer(currentState, clear());
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
