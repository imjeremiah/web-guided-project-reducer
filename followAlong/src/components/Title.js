import React, { useState, useReducer } from 'react';
import reducer, { initialState} from './../reducers';
import { toggleEditing } from './../actions';

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    // setNewTitleText(e.target.value);
  };

  const handleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleFormSubmit = () => {
    // setTitle(newTitleText);
    // setEditing(false);
  }

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={handleEditing} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleFormSubmit}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;