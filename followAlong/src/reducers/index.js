import { TOGGLE_EDITING, CHANGE_NEW_TITLE, EDIT_TITLE } from './../actions';

export const initialState = {
    title: "Hello earthlings!",
    editing: false,
    newTitleText: ''
}

const reducer = (state, action) => {
    console.log("3. Entered the reducer.", action);
    switch(action.type) {
        case TOGGLE_EDITING:
            return {...state, editing: !state.editing }
        case CHANGE_NEW_TITLE:
            return {...state, newTitleText: action.payload}
        case EDIT_TITLE:
            return {...state, editing:false, title: state.newTitleText}
        default:
            return state;
    }
}

export default reducer;