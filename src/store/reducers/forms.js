import {actions} from "./index";

const formsReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.FORM_DATA:
            return {...state, formData: payload}
        default:
            return state
    }
}

export default formsReducer;