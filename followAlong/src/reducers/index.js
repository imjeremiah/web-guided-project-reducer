import { TOGGLE_EDITING, CHANGE_NEW_TITLE } from './../actions';

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
            return {...state, editing:false, }
    }

    // if (action.type === TOGGLE_EDITING) {
    //     console.log("4. Execute TOGGLE_EDITING.");
    //     return {...state, editing: !state.editing }
    // } else if (action.type === CHANGE_NEW_TITLE) {
    //     return {...state, newTitleText: action.payload}
    // }
    return state;
}

export default reducer;