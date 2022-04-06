
type isFetchingState = {
    isFetching: boolean
}

type isFetchingAC = {
    type: string,
    isFetching: boolean
}

const initialState: isFetchingState = {
    isFetching: true
}

export const loadingReducer = (state = initialState, action: isFetchingAC) => {
    switch(action.type) {
        case "123":
            return {...state}
        default:
            return state
    }
}