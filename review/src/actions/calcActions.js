export const add = (value) => {
    return({type:"ADD_VALUE", payload:value});
}

export const subtract = (value) => {
    return({type:"SUBTRACT", payload:value});
}

export const addToMemory = () => {
    return({type:"ADD_TO_MEMORY"});
}

export const clear = () => {
    return({type:"CLEAR"});
}