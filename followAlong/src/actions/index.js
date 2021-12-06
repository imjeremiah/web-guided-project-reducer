export const TOGGLE_EDITING = "TOGGLE_EDITING";

export const toggleEditing = () => {
    console.log("2. Return action object.");
    return({type: TOGGLE_EDITING});
}

export const CHANGE_NEW_TITLE = "CHANGE_NEW_TITLE";

export const changeNewTitle = (newTitle)=> {
    return({type: CHANGE_NEW_TITLE, payload:newTitle});
}