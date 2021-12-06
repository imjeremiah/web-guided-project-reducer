export const initialState = {
    title: "Hello earthlings!",
    editing: false,
    newTitleText: ''
}

const reducer = (state, action) => {
    if (action.type === "TOGGLE_EDITING") {

    }
    return state;
}

export default reducer;