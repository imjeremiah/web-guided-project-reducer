import React, { useReducer } from "react";
import reducer, { initialState } from './reducers/calcReducer';
import { 
  addAction, 
  subtractAction, 
  addToMemoryAction, 
  clearAction  
} from "./actions/calcActions";
import "./styles.css";

let currentState = initialState;

// console.log('currentState: ', currentState);
// currentState = reducer(currentState, addAction(10));
// console.log('currentState: ', currentState);

// currentState = reducer(currentState, subtractAction(2));
// console.log('currentState: ', currentState);

// currentState = reducer(currentState, addToMemoryAction());
// console.log('currentState: ', currentState);

// currentState = reducer(currentState, clearAction());
// console.log('currentState: ', currentState);

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddClick = () => {
    dispatch(addAction(5));
  }

  const handleSubtractClick = () => {
    dispatch(subtractAction(2));
  }

  const handleClearClick = () => {
    dispatch(clearAction());
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button onClick={handleAddClick} type="button" className="btn">
        +5
      </button>
      <button onClick={handleSubtractClick} type="button" className="btn">
        -2
      </button>
      <button onClick={handleClearClick} type="button" className="btn">
        CE
      </button>
    </div>
  );
}
