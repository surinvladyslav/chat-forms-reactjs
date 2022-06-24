export const actions = {
    LOADER: 'LOADER',
    USER: 'USER'
}

export const Reducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.LOADER:
            return {...state, loader: payload}
        case actions.USER:
            return {...state, user: payload}
        default:
            return state
    }
}