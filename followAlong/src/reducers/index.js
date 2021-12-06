import { TOGGLE_EDITING } from './../actions';

export const initialState = {
    title: "Hello earthlings!",
    editing: false,
    newTitleText: ''
}

const reducer = (state, action) => {
    console.log("3. Entered the reducer.", action);

    if (action.type === TOGGLE_EDITING) {
        console.log("4. Execute TOGGLE_EDITING.");
        return {...state, editing: !state.editing }
    } else if (action.type === CHANGE_NEW_TITLE) {
        return {...state, newTitleText: action.payload}
    }
    return state;
}

export default reducer;