import React, { useReducer } from "react";
import reducer, { initialState} from './reducers/calcReducer';
import "./styles.css";
import { add, subtract, addToMemory, clear} from './actions/calcActions';


// let currentState = initialState;
// console.log(currentState);

// currentState = reducer(currentState, add(2));
// console.log(currentState);

// currentState = reducer(currentState, add(3));
// console.log(currentState);

// currentState = reducer(currentState, subtract(20));
// console.log(currentState);

// currentState = reducer(currentState, addToMemory());
// console.log(currentState);

// currentState = reducer(currentState, clear());
// console.log(currentState);


export default function App() {
  const [state, dispatch ] = useReducer(reducer, initialState);
  
  const handleAdd = () => {
    dispatch(add(2));
  }

  const handleSubtract = ()=> {
    dispatch(subtract(5));
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button onClick={handleAdd} type="button" className="btn">
        + 2
      </button>
      <button onClick={handleSubtract} type="button" className="btn">
        - 5
      </button>
      <button type="button" className="btn">
        CE
      </button>
    </div>
  );
}
