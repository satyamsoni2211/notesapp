let initialState = {
    notes: [],
    authToken: null
}

export const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case 'add':
            return {
                ...state,
                ...action.payload
            }
        case 'addtoken':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
