import {actions} from "./index";

const formsReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.FORM_ID:
            return {...state, formId: payload}
        case actions.GOOGLE_AUTH:
            return {...state, googleAuth: payload}
        case actions.FORM_DATA:
            return {...state, formData: payload}
        case actions.FORM_BASE_DATA:
            return {...state, formBaseData: payload}
        default:
            return state
    }
}

export default formsReducer;