

const initialState = {

}

export const loadingReducer = (state = initialState, action) => {
    switch(action.type) {
        case "NEW_MESSAGE":
            return {...state}
        default:
            return state
    }
}