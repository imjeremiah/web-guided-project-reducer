export const TOGGLE_EDITING = "TOGGLE_EDITING";

export const toggleEditing = () => {
    console.log("2. Return action object.");
    return({type: TOGGLE_EDITING});
}